const Drone = require("../Schemas/drone");
const UserSite = require("../Schemas/userSite");

const DroneUpdate = async (req, res) => {
    try {
        const siteId = req.params.siteId;
        const droneId = req.params.droneId; 
        const updates = req.body;

        const checkUpdate = await UserSite.find({ _id: updates.site }); 

        const userSite = checkUpdate;
        if(!userSite)
        {
            return res.status(404).json({ message: 'Site not found in user' });
        }

        const updatedDrone = await Drone.findOneAndUpdate({ _id: droneId, site: siteId }, updates, { new: true });

        if (!updatedDrone) {
            return res.status(404).json({ message: 'Drone not found in the specified site' });
        }

        res.json(updatedDrone);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = DroneUpdate;


