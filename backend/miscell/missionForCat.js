const Mission=require("../Schemas/mission");

const MissionForCat=async (req, res) => {
    try {
        const categoryId = req.params.catId;
        const missions = await Mission.find({ category: categoryId });
        if(!missions)
        {
            res.status(200).json({ message: 'No missions for this category' });
        }
        res.json(missions);
    } catch (error) {
        console.error('Error retrieving missions by category:', error);
        res.status(500).json({ message: 'Could not retrieve missions by category', error: error.message });
    }
};

module.exports=MissionForCat;