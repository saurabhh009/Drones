const Mission=require("../Schemas/mission");
const UserSite=require("../Schemas/userSite");
const UserCategory=require("../Schemas/userCat");
const User=require("../Schemas/user");

const MissionCreate=async (req, res) => {
    const droneId=req.params.droneId;
    const siteId = req.params.siteId; 
    const categoryId=req.params.categoryId;
    const { alt, speed, name, waypoints } = req.body;
    const userId=req.userId;

    try {
        const checkSite=await UserSite.findById(siteId);
        const checkCategory=await UserCategory.findById(categoryId);
        const checkUser=await User.findById(userId);
        if(!checkUser)
        {
            return res.status(404).json({ message: 'No such user' });
        }
        if(!checkSite)
        {
            return res.status(404).json({ message: 'Site not found in the user account' });
        }
        if(!checkCategory)
        {
            return res.status(404).json({ message: 'Category not found in the user account' });
        }
        const newMission = new Mission({ alt, speed, name, site: siteId, category: categoryId, user: userId, drone:droneId, waypoints });
        await newMission.save();
        res.status(201).json({ message: 'Mission created successfully', mission: newMission });
    } catch (error) {
        console.error('Error creating mission:', error);
        res.status(500).json({ message: 'Could not create mission', error: error.message });
    }
};

module.exports=MissionCreate;