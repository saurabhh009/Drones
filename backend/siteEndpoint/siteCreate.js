const Site=require("../Schemas/site");

const SiteCreate= async (req, res) => {
    try {
        const { site_name, latitude, longitude } = req.body;
        const site = new Site({ site_name, position: { latitude, longitude } });
        await site.save();
        res.status(201).json(site);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports=SiteCreate;