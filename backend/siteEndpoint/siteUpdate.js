const Site=require("../Schemas/site");

const SiteUpdate=async (req, res) => {
    try {
        const site = await Site.findById(req.params.id);
        if (site) {
            site.site_name = req.body.site_name || site.site_name;
//            site.user = req.body.user || site.user;
            site.position.latitude = req.body.latitude || site.position.latitude;
            site.position.longitude = req.body.longitude || site.position.longitude;

            const updatedSite = await site.save();
            res.json(updatedSite);
        } else {
            res.status(404).json({ message: 'Site not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports=SiteUpdate;