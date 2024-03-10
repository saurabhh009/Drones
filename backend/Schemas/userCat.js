const mongoose = require('mongoose');
const User=require("../Schemas/user");
const Category=require("../Schemas/category");

const userCategorySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: Category, required: true },
});

const UserCategory = mongoose.model('UserCategory', userCategorySchema);

module.exports = UserCategory;