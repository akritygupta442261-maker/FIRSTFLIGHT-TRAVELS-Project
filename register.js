const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    res.status(201).json({
      message: "Registration successful"
    });
  } catch (error) {
    res.status(500).json({
      message: "MongoDB Atlas save failed"
    });
  }
});

module.exports = router;
