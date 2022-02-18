const express = require('express');
const router = express.Router();
const Note = require('../models/notes');

router.get("/notes", (req, res, next) => {
  //empty object meant that we need to find all posts
  Note.find({}).sort([['createdOn', -1]])
    .then((data) => res.json(data))
    .catch(err => {
      console.log("Get posts error -> ", err)
    })
});

router.post('/notes', (req, res, next) => {
  if (req.body.noteText) {
    Note.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.put('/notes/:id', (req, res, next) => {
  if (req.body.action) {
    Note.findOneAndUpdate(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/notes/:id', (req, res, next) => {
  Note.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;