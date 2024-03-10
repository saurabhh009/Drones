const Mission=require("../Schemas/mission");

const MissionForSite=async (req, res) => {
    try {
        const siteId = req.params.siteId;
        const missions = await Mission.find({ site: siteId });
        if(!missions)
        {
            res.status(200).json({ message: 'No missions for this site' });
        }
        res.json(missions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports=MissionForSite;