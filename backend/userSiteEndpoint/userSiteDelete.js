const UserSite = require("../Schemas/userSite");

const UserSiteDelete = async (req, res) => {
    try {
        const siteId = req.params.siteId;
        const deletedUserSite = await UserSite.findOneAndDelete({ _id: siteId });

        if (!deletedUserSite) {
            return res.status(404).json({ error: 'User site association not found' });
        }

        res.json({ message: 'User site association deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = UserSiteDelete;
