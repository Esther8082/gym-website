const express = require("express");
const router = express.Router();

const pool = require("../db/database");

// GET all classes
router.get("/", async (req, res) => {

    try {
        const result = await pool.query(
            "SELECT * FROM classes ORDER BY class_id"
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Database error");
    }

});

// GET single class
router.get("/class/:id", async (req, res) => {

    const id = req.params.id;

    try {
        const result = await pool.query(
            "SELECT * FROM classes WHERE class_id = $1",
            [id]
        );

        res.json(result.rows[0]);

    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }

});

router.get("/gym/:gym", async (req, res) => {

    const gym = req.params.gym;

    try {

        const result = await pool.query(
            `SELECT c.class_id,
                    c.name,
                    s.day,
                    s.time,
                    s.duration,
                    s.instructor
             FROM classes c
             JOIN class_schedules s ON c.class_id = s.class_id
             WHERE s.gym_name = $1
             ORDER BY c.class_id`,
            [gym]
        );

        res.json(result.rows);

    } catch (err) {
        console.error(err);
        res.status(500).send("Database error");
    }

});

// GET schedule (KEEP IT HERE IF YOU WANT)
router.get("/schedule/:classId/:gym", async (req, res) => {

    const { classId, gym } = req.params;

    try {
        const result = await pool.query(
            `SELECT * FROM class_schedules 
             WHERE class_id = $1 AND gym_name = $2`,
            [classId, gym]
        );

        res.json(result.rows);

    } catch (err) {
        console.error(err);
        res.status(500).send("Database error");
    }

});

module.exports = router;