const User = require("../Schemas/user");
const jwt = require('jsonwebtoken');
your_secret_key = "HUJyfutfjyfmjv34567tgkYGKGJLU5hj";



async function authenticateUser(req, res, next) {
	try {
		const token = req.headers.authorization?.split(' ')[0];
        const decodedToken = jwt.decode(token);

		const rootUser = await User.findOne({ _id: decodedToken.id });
		if (!rootUser) {
			throw new Error("User not found");
		}

		req.token = token;
		req.rootUser = rootUser;
		req.userId = rootUser._id;

		next();
	} catch (error) {
		console.log(error.message);
		res.status(401).json({ message: "Unauthorized: No token provided", error });
	}
};

module.exports=authenticateUser;