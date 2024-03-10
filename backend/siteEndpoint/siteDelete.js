const Site=require("../Schemas/site");

const SiteDelete=async (req, res) => {
    try {
        const site = await Site.findById(req.params.id);
        if (site) {
            await site.deleteOne();
            res.json({ message: 'Site deleted' });
        } else {
            res.status(404).json({ message: 'Site not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports=SiteDelete;
