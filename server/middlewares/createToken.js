import jwt from 'jsonwebtoken';

const createToken = (res, user) => {
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    // set JWT in cookie as secure and httpOnly
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 30 * 24 * 60 * 60 * 1000, 
        sameSite: "strict"
    })
    
    return token
}

export default createToken;