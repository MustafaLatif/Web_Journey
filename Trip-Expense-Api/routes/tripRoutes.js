const express = require('express');
const router = express.Router();
const Trip = require("../models/trip");

// GET /api/trips - list all trips
router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find().sort({ createdAt: -1 });
    res.json({ trips });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/trips - create new trip
router.post("/", async (req, res) => {
  const { name } = req.body;

  if (!name || name.trim().length === 0) {
    return res.status(400).json({ error: "Name is required" });
  }

  try {
    const trip = new Trip({ name: name.trim() });
    const savedTrip = await trip.save();
    res.status(201).json(savedTrip);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/trips/:id - get a single trip
router.get("/:id", async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }
    res.json(trip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/trips/:id - update a trip
router.put("/:id", async (req, res) => {
  const { name } = req.body;

  if (!name || name.trim().length === 0) {
    return res.status(400).json({ error: "Name is required" });
  }

  try {
    const trip = await Trip.findByIdAndUpdate(
      req.params.id,
      { name: name.trim() },
      { new: true, runValidators: true }
    );

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.json(trip);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/trips/:id - delete a trip
router.delete("/:id", async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.id);

    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    res.json({ message: "Trip deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
