const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abdullahmasood450:harry_potter123@cluster0.fukpxci.mongodb.net/Netflix_Clone?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('✅ Connected to MongoDB!'))
.catch(err => console.error('❌ Connection error:', err));

// Mongoose schemass 
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: {type: String, required: true}
});


const User= mongoose.model('users' , userSchema );



///
app = express(); 

app.use(cors());
app.use(express.json());

app.listen(3001, '127.0.0.1');


app.post('/signup' , async (req, res)=>{
    try{
    const email = req.body.email; 
    const password =  req.body.password; 

     const user = await User.findOne({ email });

     if (user)
     {
        res.status(200).json({ message: "A user already exists with this email. Please log in" });
        console.log("User already exists");
        
     }
     else{
        const newuser = new User(
            {
                email, 
                password,
            });

            await newuser.save();
            res.status(201).json({message: 'You have been registered successfully'});
            console.log("user registered successfully");
        }

    }
    catch(error)
    {
        res.status(500).json({message : "Internal Server Error"});
    }

});

