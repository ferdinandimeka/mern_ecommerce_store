import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 32,
        unique: true
    }
}, 
    {   
        timestamps: true,
        versionKey: false
    }
);

const Category = mongoose.model('Category', categorySchema);
export default Category;