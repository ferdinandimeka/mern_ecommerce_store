import Product from '../models/product.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const createProduct = asyncHandler(async (req, res) => {
    try {
        const { name, description, price, category, quantity, brand } = req.body

        // validate
        switch (true) {
            case !name:
                return res.status(400).send({ error: 'Name is required' });
            case !description:
                return res.status(400).send({ error: 'Description is required' });
            case !price:
                return res.status(400).send({ error: 'Price is required' });
            case !category:
                return res.status(400).send({ error: 'Category is required' });
            case !quantity:
                return res.status(400).send({ error: 'Quantity is required' });
            case !brand:
                return res.status(400).send({ error: 'Brand is required' });
        }
        // image: req.files.image.path
        const product = new Product({ ...req.body });
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        console.error(error);
        res.status(400).send({ error: error.message });
    }
});

export { createProduct }