import mongoose from 'mongoose'

const Schema = mongoose.Schema
const CategorySchema = new Schema({
    name: String,
}, {
    timestamps: true
});

export const CategoryModel = mongoose.model('category', CategorySchema)