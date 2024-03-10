const Drone = require("../Schemas/drone");

const DroneUpdate = async (req, res) => {
    try {
        const siteId = req.params.siteId;
        const droneId = req.params.droneId;
        const updates = req.body;
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
