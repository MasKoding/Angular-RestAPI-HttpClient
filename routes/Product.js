var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Product = require('../models/Product.js')

// GET ALL PRODUCTs

router.get('/',function (req,res,next) {
    Product.find(function (err,products) {
        if(err) return next(err)
        res.json(products)
    })    
})

router.get('/:id',function (req,res,next) {
    Product.findById(req.params.id, function (err,product) {
        if(err) return next(err)
        res.json(product)
    })
})


router.post('/',function (req,res,next) {
    Product.create(req.body, function (err,post) {
        if(err) return next(err)
        res.json(post)
    })
})

router.put('/:id',function (req,res,next) {
    Product.findByIdAndUpdate(req.params.id,req.body,function (err,post) {
        if(err) return next(err)
        res.json(post)
    })    
})
router.delete('/',function (req,res,next) {
    Product.findByIdAndDelete(req.params.id,req.body, function (err,post) {
        if(err) return next(err)
        res.json(post)
    })
})

module.exports = router