const mongoose = require("mongoose");
const User=require("./user");
const Site=require("./site")

const droneSchema = new mongoose.Schema({
    drone_id: { type: String, required: true },

    user: { type: mongoose.Schema.Types.ObjectId, ref: User,required: true },
    site: { type: mongoose.Schema.Types.ObjectId, ref: Site, required: true },

    created_at: { type: Date, default: Date.now },
    deleted_by: { type: String, required: true },
    deleted_on: { type: Date },
    drone_type: { type: String, required: true },
    make_name: { type: String, required: true },
    name: { type: String, required: true },
    updated_at: { type: Date, default: Date.now }
});

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;
