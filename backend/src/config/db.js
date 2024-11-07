// db.js
import mongoose from 'mongoose';

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Database connected successfully'))
        .catch((err) => console.log('Database connection error: ', err));
};

export default connectDB;

