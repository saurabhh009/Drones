const UserSite=require("../Schemas/userSite");

const UserSiteUpdate=async (req, res) => {
    try {
        const siteId = req.params.siteId;
        const updates = req.body;
        const updatedUserSite = await UserSite.findOneAndUpdate({ _id: siteId }, updates, { new: true });

        if (!updatedUserSite) {
            return res.status(404).json({ error: 'User site association not found' });
        }

        res.json(updatedUserSite);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports=UserSiteUpdate;