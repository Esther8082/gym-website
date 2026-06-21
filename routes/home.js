const express = require("express");
const router = express.Router();
const pool = require("../db/database");

/* =========================
   HOMEPAGE CONTENT
========================= */
router.get("/", async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT hero_video, welcome_image, map_image
             FROM homepage_content
             LIMIT 1`
        );

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("DB error");
    }
});

/* =========================
   FLOW PROGRAMS
========================= */
router.get("/flow", async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT program_id, title, description, image
             FROM flow_programs
             ORDER BY program_id`
        );

        res.json(result.rows);

    } catch (err) {
        console.error(err);
        res.status(500).send("DB error");
    }
});

router.get("/programs", async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT program_id, title, description, image
             FROM programs
             ORDER BY program_id`
        );

        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("DB error");
    }
});

module.exports = router;