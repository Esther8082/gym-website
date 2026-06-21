const express = require("express");
const cors = require("cors");
const path = require("path");

// ROUTES
const classesRoutes = require("./routes/classes");
const trainersRoutes = require("./routes/trainers");
const membershipRoutes = require("./routes/memberships");
const homeRoutes = require("./routes/home");
const locationsRoutes = require("./routes/locations");
const programsRoutes = require("./routes/programs");
const classImagesRoutes = require("./routes/classimages");

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

// frontend static images 
app.use(
    "/classesmedia",
    express.static(path.join(__dirname, "../frontend/classesmedia"))
);

app.use(
    "/media",
    express.static(path.join(__dirname, "../frontend/media"))
);

app.use(
    "/classesmedia",
    express.static(path.join(__dirname, "../frontend/classesmedia"))
);

// test route
app.get("/", (req, res) => {
    res.send("Gym API is running.");
});

// start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});