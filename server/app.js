require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 6005;
require('./db/conn');
const logindb = require('./model/logindb');
const userdb = require('./model/userdb');
const datadb = require('./model/datadb');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

// Route to handle login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userdb.findOne({ username: username });
        if (user) {
            // Check if the provided password matches the password stored in the database
            if (user.password === password) {
                const matchingUsers = await datadb.find({
                    targetHobby:user.hobby, // Check if target hobby matches any of the user's hobby
                    targetAgeRange: {
                        $gte: user.age - 10, // User's age should be within 10 years less than the upper age limit
                        $lte: user.age + 10 // User's age should be within 10 years more than the lower age limit
                    }
                });
                // console.log(matchingUsers);
                if (matchingUsers.length > 0) {
                    // If matching users found, send user information and matching users to frontend
                    res.json({ status: 'exist', user: user, matchingUsers: matchingUsers });
                } else {
                    res.json({ status: 'not exist ok', user: user });
                }
            } else {
                res.json({ status: 'incorrect' }); // Send status 'incorrect' if password is incorrect
            }
        } else {
            res.json({ status: 'not exist' }); // Send status 'not exist' if username is not found
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to handle user registration
app.post('/register-user', async (req, res) => {
    const { username, age, email, password, hobby } = req.body;
    try {
        const newUser = new userdb({
            username,
            age,
            email,
            password,
            hobby
        });
        await newUser.save();
        const roles='user';
        const userSave=new logindb({
            username,
            password,
            roles
        });
        await userSave.save()
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/register-business', async (req, res) => {
    console.log(req.body);
    const {businessName, description,targetAgeRange,targetHobby} = req.body;
    try {
        const newData = new datadb({
            // username, 
            // email, 
            // password, 
            businessName, 
            description,
            targetAgeRange,
            targetHobby
        });
        await newData.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});