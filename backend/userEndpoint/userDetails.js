const User=require("../Schemas/user");

const UserDetails=async (req, res) => {
    const userId = req.userId; // Extract user ID from request parameters

    try {
        // Query the database to find the user by ID
        const user = await User.findById(userId);

        // If user is found, extract and return name and email fields
        if (user) {
            const userDetails = {
                name: user.name,
                email: user.email
            };
            res.status(200).json(userDetails);
        } else {
            // If user is not found, return 404 Not Found
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        // Handle errors
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports=UserDetails;