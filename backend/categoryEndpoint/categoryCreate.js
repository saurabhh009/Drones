const Category=require("../Schemas/category");

const CategoryCreate=async (req, res) => {
    try {
        const { name, color, tag_name } = req.body;
        const category = await Category.create({ name, color, tag_name });
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports=CategoryCreate;