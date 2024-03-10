const mongoose = require("mongoose");
const Site=require("./site")
const Category=require("./category");
const User=require("./user");
const Drone=require("./drone");

const missionSchema = new mongoose.Schema({
    alt: {
        type: Number,
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    site: { type: mongoose.Schema.Types.ObjectId, ref: Site, required: true },
    category: {type: mongoose.Schema.Types.ObjectId, ref: Category, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: User, required:true},
    drone: {type: mongoose.Schema.Types.ObjectId, ref: Drone, required:true},

    waypoints: [{
        alt: {
            type: Number,
            required: true
        },
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    }],
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const Mission = mongoose.model('Mission', missionSchema);
module.exports = Mission;


