const db = require('../config/mongoose');
const express = require('express');
const router = express.Router();

router.get('/templates', function (req, res, next) {
    const collection = db.collection('template');

    collection.find({})
        .toArray(function(err, data) {
            if (!err) {
                res.json(data);
                res.status(200);
                res.end();
            } else {
                console.log(err);
            }
        });
});

router.get('/templates/:id', function (req, res, next) {
    const collection = db.collection('template');

    collection.findOne({id: +req.params.id}, function (err, data) {
        if (!err) {
            res.json(data);
            res.status(200);
            res.end();
        } else {
            console.log(err);
        }
    })
});

router.put('/templates/:id', function (req, res, next) {
    const collection = db.collection('template');

    const id = req.params.id;
    const body = req.body;

    collection.findOneAndUpdate({id: +id}, {$set: {modified: body.modified}}, {new: true}, function (err, data) {
        res.json(data.value);
        res.end();
    });
});

module.exports = router;