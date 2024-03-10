const UserSite=require("../Schemas/userSite");

const UserSiteUpdate=async (req, res) => {
    try {
        const siteId = req.params.siteId;
        const updates = req.body;
        const updatedUserSite = await UserSite.findOneAndUpdate({ _id: siteId }, updates, { new: true });
        const checkUpdate=await UserSite.find({site_id:updates.siteId});
        if (!updatedUserSite) {
            return res.status(404).json({ error: 'User site association not found' });
        }
        if(!checkUpdate)
        {
            return res.status(404).json({ error: 'Site not under user. Thus, this can not be done' });
        }
        res.json(updatedUserSite);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports=UserSiteUpdate;