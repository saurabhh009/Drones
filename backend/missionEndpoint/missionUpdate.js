const Mission=require("../Schemas/mission");
const UserCat=require("../Schemas/userCat");

const UpdateMission=async (req, res) => {
    const siteId = req.params.siteId; 
    const missionId = req.params.missionId;
    const updates = req.body;

    try {
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