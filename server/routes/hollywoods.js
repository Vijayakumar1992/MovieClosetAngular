var express = require("express");
var router = express.Router();
var sequenceGenerator = require("./sequenceGenerator");

const Hollywood = require("../model/hollywood");


function returnError(res, error) {
  res.status(500).json({
    hollywoods: "An error occurred",
    error: error
  });
}

router.get("/", (req, res, next) => {
  Hollywood.find()
    .then(hollywoods => {
      res.status(200).json({
        message: "Hollywood fetched successfully",
        hollywoods: hollywoods      
      });
    })
    .catch(error => {
      returnError(res, error);
    });
});

router.post("/", (req, res, next) => {
  const maxHollywoodId = sequenceGenerator.nextId("hollywoods");

  const hollywood = new Hollywood({
    id: maxHollywoodId,
    name: req.body.name,
    type: req.body.type,
    genre: req.body.genre
  });

  hollywood
    .save()
    .then(createdMessage => {
      res.status(201).json({
        hollywood: createdMessage,
        message: "Hollywood added successfully"
      });
    })
    .catch(error => {
      returnError(res, error);
    });
});

router.put("/:id", (req, res, next) => {
  Hollywood.findOne({ id: req.params.id })
    .then(hollywoods => {
      console.log(req.body);
      hollywoods.name = req.body.name;
      hollywoods.type = req.body.type;
      hollywoods.genre = req.body.genre;

      Hollywood.updateOne({ id: req.params.id }, hollywoods)
        .then(result => {
          res.status(204).json({
            hollywoods: "Hollywood updated successfully"
          });
        })
        .catch(error => {
          returnError(res, error);
        });
    })
    .catch(error => {
      res.status(500).json({
        hollywoods: "Hollywood not found.",
        error: { hollywoods: "Hollywood not found" }
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Hollywood.findOne({ id: req.params.id })
    .then(hollywoods => {
      Hollywood.deleteOne({ id: req.params.id })
        .then(result => {
          res.status(204).json({ hollywoods: "Hollywood deleted successfully" });
        })
        .catch(error => {
          returnError(res, error);
        });
    })
    .catch(error => {
      returnError(res, error);
    });
});

module.exports = router;