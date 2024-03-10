const bcrypt = require('bcrypt');
const User = require("../Schemas/user");
const generateToken = require('../jwt/generateToken');

const SignUpEnd= async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, Email and password all are required' });
    }
    const userCheck = await User.findOne({ email: req.body.email });
    if(userCheck)
    {
      return res.status(409).json({message: 'Email already exists'});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await User.create({ name, email, password: hashedPassword });
      const accessToken = await generateToken(user);
        res.cookie("userToken", accessToken, {
			  httpOnly: true,
			  expires: new Date(Date.now() + 15 * 60 * 60 * 1000),
		  });

      res.status(201).json({ message: 'User created successfully & Logged IN', user, accessToken });
    } catch (error) {
      res.status(500).json({ message: 'Could not create user', error: error.message });
    }
  };

  module.exports = SignUpEnd;

  