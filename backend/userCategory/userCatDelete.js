const UserCat=require("../Schemas/userCat");

const UserCatDelete=async (req, res) => {
    try {
        const id = req.params.id;
        const userCategory = await UserCat.findById(id);
        if (!userCategory) {
            return res.status(404).json({ error: 'User-category association not found' });
        }
        await UserCat.findByIdAndDelete(id);
        
        res.json({ message: 'User-category association deleted successfully' });
    } catch (error) {
        console.error('Error deleting user-category association:', error);
        res.status(500).json({ message: 'Could not delete user-category association', error: error.message });
    }
};

module.exports=UserCatDelete;