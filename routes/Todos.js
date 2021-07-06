var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var todos = require('../models/Todos')

// GET ALL Todos

router.get('/',function (req,res,next) {
    todos.find(function (err,todos) {
        if(err) return next(err)
        res.json(todos)
    })    
})

router.get('/:id',function (req,res,next) {
    todos.findById(req.params.id, function (err,todo) {
        if(err) return next(err)
        res.json(todo)
    })
})


router.post('/',function (req,res,next) {
    todos.create(req.body, function (err,post) {
        if(err) return next(err)
        res.json(post)
    })
})

router.put('/:id',function (req,res,next) {
    todos.findByIdAndUpdate(req.params.id,req.body,function (err,post) {
        if(err) return next(err)
        res.json(post)
    })    
})
router.delete('/',function (req,res,next) {
    todos.findByIdAndDelete(req.params.id,req.body, function (err,post) {
        if(err) return next(err)
        res.json(post)
    })
})

module.exports = router