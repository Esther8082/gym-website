const express = require("express");
const cors = require("cors");
const path = require("path");
const pool = require("./db/database");

// ROUTES
const classesRoutes = require("./routes/classes");
const trainersRoutes = require("./routes/trainers");
const membershipRoutes = require("./routes/memberships");
const homeRoutes = require("./routes/home");
const locationsRoutes = require("./routes/locations");
const programsRoutes = require("./routes/programs");
const classImagesRoutes = require("./routes/classimages");
const clubsRoutes = require("./routes/clubs");

const app = express();

// middleware 
app.use(cors());
app.use(express.json());

// routes
app.use("/classes", classesRoutes);
app.use("/memberships", membershipRoutes);
app.use("/home", homeRoutes);
app.use("/trainers", trainersRoutes);
app.use("/locations", locationsRoutes);
app.use("/programs", programsRoutes);
app.use("/class-images", classImagesRoutes);
app.use("/clubs", clubsRoutes);

app.use("/classesmedia",
    express.static(path.join(__dirname, "./classesmedia"))
);

app.use("/media",
    express.static(path.join(__dirname, "./media"))
);


// test route
app.get("/", (req, res) => {
    res.send("Gym API is running.");
});

// database test route
app.get("/testdb", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});
// start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Esther your Server is running on port ${PORT}`);
});