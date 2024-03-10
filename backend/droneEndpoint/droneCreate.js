const Drone = require("../Schemas/drone");
const UserSite=require("../Schemas/userSite");

const DroneCreate = async (req, res) => {
    try {
        const userId=req.userId;
        const siteId = req.params.siteId;
        const checkSite=await UserSite.findById(siteId);
        if(!checkSite)
        {
            return res.status(404).json({ message: "Site not found in the user account" });
        }
        const { drone_id, deleted_by, drone_type, make_name, name } = req.body;
        const drone = new Drone({ 
            drone_id, 
            user: userId, 
            site: siteId, 
            deleted_by, 
            drone_type, 
            make_name, 
            name 
        });
        
        const newDrone = await drone.save();
        res.status(201).json(newDrone);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = DroneCreate;
