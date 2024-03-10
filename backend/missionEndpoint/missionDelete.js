const Mission=require("../Schemas/mission");

const MissionDelete=async (req, res) => {
    const siteId = req.params.siteId; 
    const missionId = req.params.missionId;

    try {
        const deletedMission = await Mission.findOneAndDelete({ _id: missionId, site: siteId });

        if (!deletedMission) {
            return res.status(404).json({ message: 'Mission not found in the specified site' });
        }

        res.json({ message: 'Mission deleted successfully' });
    } catch (error) {
        console.error('Error deleting mission:', error);
        res.status(500).json({ message: 'Could not delete mission', error: error.message });
    }
};

module.exports=MissionDelete;