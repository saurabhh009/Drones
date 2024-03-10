const Drone=require("../Schemas/drone");
const UserSite=require("../Schemas/userSite");

const ShiftDroneSite=async (req, res) => {
    try {
        const userId=req.userId;
        const {newSiteId}=req.body;
        const droneId = req.params.droneId;
        const drone = await Drone.findById(droneId);
        if (!drone) {
            return res.status(404).json({ message: 'Drone not found' });
        }
        if (!drone.user.equals(req.userId)) {
            return res.status(401).json({ message: 'User cannot do this' });
        }
        const newSite = await UserSite.findById(newSiteId);
        if (!newSite) {
            return res.status(404).json({ message: 'New site not in user account' });
        }
        drone.site = newSiteId;
        await drone.save();

        res.json({ message: 'Drone shifted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports=ShiftDroneSite;
