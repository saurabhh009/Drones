const UserSite=require("../Schemas/userSite");
const User=require("../Schemas/user");
const Site=require("../Schemas/site");

const UserSiteCreate=async (req, res) => {
    try {
        const userId = req.userId;
        
        const { siteId } = req.body;
        const user= await User.findById(userId);
        const site=await Site.findById(siteId);
        if(!user)
        {
            return res.status(404).json({ message: "User not found" });
        }
        if(!site)
        {
            return res.status(404).json({ message: "Site not found" });
        }
        const userSite = await UserSite.create({ user_id: userId, site_id: siteId });

        res.status(201).json(userSite);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports=UserSiteCreate;