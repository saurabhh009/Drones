const UserCat=require("../Schemas/userCat");

const UserCatUpdate=async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const userCategory = await UserCat.findById(id);
        if (!userCategory) {
            return res.status(404).json({ error: 'User-category association not found' });
        }
        await UserCat.findByIdAndUpdate(id, updates, { new: true });
        
        res.json({ message: 'User-category association updated successfully' });
    } catch (error) {
        console.error('Error updating user-category association:', error);
        res.status(500).json({ message: 'Could not update user-category association', error: error.message });
    }
};

module.exports=UserCatUpdate;