const Category = require("../Schemas/category");

const CategoryUpdate = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const existingCategory = await Category.findById(categoryId);
        if (!existingCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        const updates = req.body;
        if (!updates || Object.keys(updates).length === 0) {
            return res.status(400).json({ error: 'Updates object is required' });
        }
        const updatedCategory = await Category.findByIdAndUpdate(categoryId, updates, { new: true });
        res.json(updatedCategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = CategoryUpdate;
