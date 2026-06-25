const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const clubs = [
        {
            name: "White River Gym",
            address: "White River, Mpumalanga",
            facilities: "Weights, Cardio, Pool",
            opening_hours: "Mon-Fri: 06:00 - 22:00"
        },
        {
            name: "Valencia Gym",
            address: "Nelspruit",
            facilities: "Weights, CrossFit, Sauna",
            opening_hours: "Mon-Sun: 05:00 - 23:00"
        },
        {
            name: "Sonpark Gym",
            address: "Mbombela",
            facilities: "Weights, Boxing, Yoga",
            opening_hours: "Mon-Fri: 06:00 - 21:00"
        }
    ];

    res.json(clubs);
});

module.exports = router;