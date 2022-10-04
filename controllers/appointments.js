const res = require("express/lib/response");
const mysql = require("mysql");
const pool = require("../sql/connection");

const getAppointment = (req, res) => {
  pool.query("SELECT * FROM appointments", (err, rows) => {
    res.json(rows);
  });
};
