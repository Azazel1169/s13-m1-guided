const express = require("express");

const Dogs = require("./dog-model");

const router = express.Router();

// Route to get all dogs
router.get("/", async (req, res, next) => {
  try {
    const dogs = await Dogs.findAll();
    res.json(dogs);
  } catch (err) {
    res.status(500).json({
      message: "Error retriecing dogs",
    });
  }
});

// Route to get a dog by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dog = await Dogs.findById(id);
    if (!dog) {
      res.status(404).json({
        message: "Dog not found",
      });
    }
    res.json(dog);
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving dog",
    });
  }
});

// Route to create a new dog
router.post("/", async (req, res) => {
  try {
    const newDog = await Dogs.create(req.body);
    res.status(201).json(newDog);
  } catch (err) {
    res.status(500).json({
      message: "Error creating dog",
    });
  }
});

// Route to update a dog by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDog = await Dogs.update(id, req.body);
    if (!updatedDog) {
      res.status(404).json({
        message: "Dog not found",
      });
    }
    res.json(updatedDog);
  } catch (err) {
    res.status(500).json({
      message: "Error updating dog",
    });
  }
});

// Route to delete a dog by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDog = await Dogs.delete(id);
    if (!deletedDog) {
      res.status(404).json({
        message: "Dog not found",
      });
    }
    res.json(deletedDog);
  } catch (err) {
    res.status(500).json({
      message: "Error deleting dog",
    });
  }
});

module.exports = router;
