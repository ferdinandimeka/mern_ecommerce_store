import mongoose from 'mongoose';

const db = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB Successfully 👍')
    } catch (error) {
        console.error('Error:', error.message)
        process.exit(1)
    }
}

export default db;