const express = require("express");
const router = express.Router();
const pool = require("../db/database");

router.get("/", async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT program_id, title, description, image
            FROM programs
            ORDER BY program_id
        `);

        res.json(result.rows);

    } catch (err) {
        console.error(err);
        res.status(500).send("DB error");
    }
});

module.exports = router;