import User from '../models/user.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import bcrypt from 'bcryptjs';
import createToken from '../middlewares/createToken.js';

const addUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    // validate
    switch (true) {
        case !name:
            return res.status(400).json({ error: 'Name is required' });
        case !email:
            return res.status(400).json({ error: 'Email is required' });
        case !password:
            return res.status(400).json({ error: 'Password is required' });
    }

    const userExists = await User.findOne({ email});
    if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
    }

    const user = new User({ name, email, password: bcrypt.hashSync(password, 8) });

    try {
        await user.save();
        createToken(res, user)

        res.status(201).json({ _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin });
    } catch (error) {
        res.status(400)
        throw new Error('Invalid user data')
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    const userExists = await User.findOne({ email });

    if (!userExists) {
        return res.status(400).json({ error: 'Invalid user' });
    }

    const passwordIsValid = bcrypt.compareSync(password, userExists.password);

    if (!passwordIsValid) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    if (userExists && passwordIsValid) {
        createToken(res, userExists)

        res.status(200).json({ 
            _id: userExists._id,
            name: userExists.name,
            email: userExists.email,
            isAdmin: userExists.isAdmin
        });
        return
    }
});

const logoutUser = asyncHandler(async (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out' });
});

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
});

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
})

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password, 8);
        }

        const updatedUser = await user.save();

        createToken(res, updatedUser)

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

const deleteUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        await User.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'User removed' });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

const updateUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.isAdmin = Boolean(req.body.isAdmin);

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
})

export { 
    addUser, loginUser, logoutUser, getAllUsers, getUserProfile,
    updateUserProfile, deleteUserById, getUserById, updateUserById
}