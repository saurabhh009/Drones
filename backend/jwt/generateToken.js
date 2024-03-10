const jwt = require('jsonwebtoken');
your_secret_key = "HUJyfutfjyfmjv34567tgkYGKGJLU5hj";

async function generateToken(user) {
    try{
        const payload = {
            id: user._id, 
            email: user.email
        };
        return jwt.sign(payload, 'your_secret_key', { expiresIn: '1h' }); 
    }catch(err){
        console.log("Something went wrong while generating token", err.message);
    }
    
}

module.exports=generateToken;
