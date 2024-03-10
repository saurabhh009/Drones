const Drone = require("../Schemas/drone");

const DroneDelete = async (req, res) => {
    try {
        const siteId = req.params.siteId;
        const droneId = req.params.droneId; 
        const deletedDrone = await Drone.findOneAndDelete({ _id: droneId, site: siteId });

        if (!deletedDrone) {
            return res.status(404).json({ message: 'Drone not found in the specified site' });
        }

        res.json({ message: 'Drone deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = DroneDelete;
