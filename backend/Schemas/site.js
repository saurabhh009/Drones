const mongoose = require('mongoose');
const User=require("./user");

const siteSchema = new mongoose.Schema({
    site_name: { type: String, required: true },
//    user: { type: mongoose.Schema.Types.ObjectId, ref: User,required: true },
    position: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
    }
});

const Site = mongoose.model('Site', siteSchema);

module.exports = Site;

