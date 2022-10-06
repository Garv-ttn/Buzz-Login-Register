const route = require('express').Router();
const User = require('../models/UserModel');
const bcrypt = require('bcrypt')

//-----------------------------Register API-------------------------------------//
route.post('/adduser',async(req,res)=>{

    try{
        //  let user = await User.find({email:req.body.email});
        //  console.log(user)
        //  !user && res.status(400).send('User already exist');
        

        const salt= await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(req.body.password,salt);
        let user = new User(
            {
                username:req.body.username,
                email:req.body.email,
                password:hashPassword,
            }
        );
        const users = await user.save();
        !users && res.status(404).send('user Not created');

        res.status(201).send('User has been created');
    
    }catch(err){
        res.status(500).send('Not Created');
    }    
});

//-----------------------------Login API-------------------------------------//

route.post('/login',async(req,res)=>{

    try{
        const user =await User.findOne({email:req.body.email});
        !user && res.status(404).json('User not find');

        const compPass=await bcrypt.compare(req.body.password,user.password);
        !compPass && res.status(400).json('Wrong Password');

        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = route;