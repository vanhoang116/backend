import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

async function connectDB(){
    const url = 'mongodb+srv://haduyphuong333:phuongthang007@cluster0.7lwwnvi.mongodb.net/?retryWrites=true&w=majority'
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;