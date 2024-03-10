const Mission=require("../Schemas/mission");
const UserCat=require("../Schemas/userCat");
const UserSite=require("../Schemas/userSite");
const Drone=require("../Schemas/drone");

const UpdateMission=async (req, res) => {
    const siteId = req.params.siteId; 
    const missionId = req.params.missionId;
    const updates = req.body;

    try {
        
        const checkSite=await UserSite.find({site:updates.siteId});
        const checkMission=await UserCat.find({category:updates.category});
        const checkDrone=await Drone.find({_id:updates.drone});
        
        
        if(!checkSite)
        {
            return res.status(404).json({ error: 'Site not under user' });
        }
        if(!checkMission)
        {
            return res.status(404).json({ error: 'Mission not under user' });
        }
        if(!checkDrone)
        {
            return res.status(404).json({ error: 'Drone not under user' });
        }

        const updatedMission = await Mission.findOneAndUpdate({ _id: missionId, site: siteId }, updates, { new: true });

        if (!updatedMission) {
            return res.status(404).json({ message: 'Mission not found in the specified site' });
        }
        res.json(updatedMission);
    } catch (error) {
        console.error('Error updating mission:', error);
        res.status(500).json({ message: 'Could not update mission', error: error.message });
    }
};

module.exports=UpdateMission;