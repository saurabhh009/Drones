const Category=require("../Schemas/category");
const User=require("../Schemas/user");
const UserCat=require("../Schemas/userCat");

const UserCatCreate=async (req, res) => {
    try {
        const {category} = req.body;
        const user=req.userId;
        const userExists = await User.exists({ _id: user });
        if (!userExists) {
            return res.status(404).json({ error: 'Referenced user not found' });
        }
        const categoryExists = await Category.exists({ _id: category });
        if (!categoryExists) {
            return res.status(404).json({ error: 'Referenced category not found' });
        }
        const userCategory = new UserCat({ user, category });
        await userCategory.save();
        
        res.status(201).json({ message: 'User-category association created successfully', userCategory });
    } catch (error) {
        console.error('Error creating user-category association:', error);
        res.status(500).json({ message: 'Could not create user-category association', error: error.message });
    }
};

module.exports=UserCatCreate;