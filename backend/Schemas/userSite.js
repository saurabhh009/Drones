const mongoose = require('mongoose');
const User=require("./user");
const Site=require("./site");

const userSitesSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
    site_id: { type: mongoose.Schema.Types.ObjectId, ref: Site, required: true }
});

const UserSite = mongoose.model('User_Sites', userSitesSchema);
module.exports=UserSite;