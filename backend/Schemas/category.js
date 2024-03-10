const mongoose = require('mongoose');
//const User=require("./user");

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    
//    user: {type: mongoose.Schema.Types.ObjectId, ref: User, required:true},
    
    color: { type: String, required: true },
    tag_name: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
