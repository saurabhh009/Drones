const Mission = require("../Schemas/mission");

const DronesForCat = async (req, res) => {
    try {
        const categoryId = req.params.catId;
        const missions = await Mission.find({ category: categoryId });
        let allDrones = [];
        missions.forEach(mission => {
            allDrones = allDrones.concat(mission.drone);
        });

        if (allDrones.length === 0) {
            return res.status(200).json({ message: 'No drones found for this category' });
        }

        res.json(allDrones);
    } catch (error) {
        console.error('Error retrieving drones by category:', error);
        res.status(500).json({ message: 'Could not retrieve drones by category', error: error.message });
    }
};

module.exports = DronesForCat;
