const express = require("express");
const router = express.Router();
const pool = require("../db/database");

/* =========================
   MEMBERSHIP HERO IMAGE
========================= */
router.get("/hero", async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT hero_image
             FROM membership_page
             LIMIT 1`
        );

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("DB error");
    }
});

/* =========================
   STANDARD MEMBERSHIPS
========================= */
router.get("/standard", async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT membership_id, name, price, description, image
             FROM standard_memberships
             ORDER BY membership_id`
        );

        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("DB error");
    }
});

/* =========================
   SPECIALIZED MEMBERSHIPS
========================= */
router.get("/specialized", async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT membership_id, name, price, description, image
             FROM specialized_memberships
             ORDER BY membership_id`
        );

        res.json(result.rows);
    } catch (err) {
        res.status(500).send("DB error");
    }
});
// helper finction
function getImageUrl(path) {
    return `http://localhost:3000/${path}`;
}
module.exports = router;