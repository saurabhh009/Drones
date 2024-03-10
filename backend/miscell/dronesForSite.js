const Drone=require("../Schemas/drone");

const DronesForSite=async (req, res) => {
    try {
        const siteId = req.params.siteId;
        const drones = await Drone.find({ site: siteId });
        if(!drones)
        {
            res.status(200).json({ message: 'No drones for this site' });
        }
        res.json(drones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports=DronesForSite;