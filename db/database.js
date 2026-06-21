
const { Pool } = require("pg");

const pool = new Pool({
    user: "gymwebsite_user",
    host: "dpg-d8s4ojurnols7386k4r0-a.oregon-postgres.render.com",
    database: "gymwebsite",
    password: "JkXGtmQ85QDGOslUuiDj1nTFfZ14RwQT",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;