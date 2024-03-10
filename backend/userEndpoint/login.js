const bcrypt = require('bcrypt');
const User = require("../Schemas/user");
const generateToken = require('../jwt/generateToken');

const Login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const accessToken = await generateToken(user);
        res.cookie("userToken", accessToken, {
			httpOnly: true,
			expires: new Date(Date.now() + 15 * 60 * 60 * 1000),
		});
        
        return res.status(200).json({ message: 'Login successful', user, accessToken });

    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = Login;