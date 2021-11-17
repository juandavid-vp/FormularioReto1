const { response } = require('express');
const express = require('express');//Module Servidor 
const router = express.Router();//Get back a object (Verbs REST)
const Form = require('../models/form');//Import Data Base


//Syntax
//router . (VERB) ((route of the page)(async and await is like a try and error)(req = input, res = output) {function})

//Page
router.get('/', async (req,res)=>{
    //const tasks = await Form.find();Find all the Data for show in the home Page
    res.render('index',);//Show the Data and the Code HTML for the Page
})

router.get('/', async (req,res)=>{
    //const tasks = await Form.find();Find all the Data for show in the home Page
    res.render('index',);//Show the Data and the Code HTML for the Page
})

//Add Task
router.post('/add', async (req,res)=>{
    const form = new Form(req.body)//New Document Of DB
    await form.save()//Save Document
    res.render('congrats',);//Go back home page
})
/*
//Delete
router.get('/delete/:id', async (req,res)=>{//(:id) _id's Number of Document
    const { id } = req.params//Object that get Document's _Id
    await Form.remove({_id: id})//Compare and Delete Document
    res.redirect('/')//Go back home page
})


//Done
router.get('/turn/:id', async (req,res)=>{
    const { id } = req.params//Object that get Document's _Id
    const task = await Task.findById(id)//Find _id
    task.status = !task.status//Change the status 
    await task.save()//save the result
    res.redirect('/')//Go back home page
})



//Update
router.post('/edit/:id', async (req,res)=>{
    const { id } = req.params//Object that get Document's _Id
    await Task.update({_id: id}, req.body)//Upadate for the new data
    res.redirect('/')//Go back home page
})

router.get('/edit/:id', async (req,res)=>{
    const { id } = req.params//Object that get Document's _Id
    const task = await Task.findById(id)//Find _id
    res.render('edit', { task})//Show another page
})
*/
module.exports = router;//Exports the routers