const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const db = require("../database/connection");

const otpGenerator = require("otp-generator");

const express = require("express");
const nodemailer = require("nodemailer");
var session = require("express-session");
const app = express();
const multer = require("multer");

const upload = multer({ dest: "../uploads/" });

exports.createtask = (req, res) => {
  const booker_id = 12;
  const date = req.body.date;
  const start_time = req.body.start_time;

  const pincode = req.body.pincode;
  const lat = 423487325;
  const lng = 364827838;

  const sql = "INSERT INTO task VALUES ?";
  const values = [
    [null, booker_id, date, start_time, null, pincode, lng, null],
  ];

  db.query(sql, [values], (err, results, fields) => {
    if (err) {
      return res.status(400).send({
        status: "false",
        message: err,
      });
    } else {
      return res.status(200).send({
        status: "Success",
        message: "success fully created",
      });
    }
  });
};

exports.gettask = (req, res) => {
  var sql = "SELECT *FROM task";
  db.query(sql, function (err, results, next) {
    if (results) {
      return res.status(200).send({
        status: "success",
        data: results,
      });
    } else {
      return res.status(400).send({
        status: "fail",
        message: "Somthing is wrong",
      });
    }
  });
};
exports.singlegettask = (req, res) => {
  var id = req.params["id"];
  var sql = `SELECT *FROM task WHERE id='${id}'`;
  db.query(sql, function (err, results, next) {
    if (results) {
      return res.status(200).send({
        status: "success",
        data: results,
      });
    } else {
      return res.status(400).send({
        status: "fail",
        message: "Somthing is wrong",
      });
    }
  });
};
exports.edittask = (req, res) => {
  var id = req.params["id"];

  var date = req.body.date;
  var start_time = req.body.start_time;
  var end_time = req.body.end_time;
  var pincode = req.body.pincode;

  var sql = `UPDATE task SET date='${date}', start_time='${start_time}', end_time='${end_time}', pincode='${pincode}' WHERE id=${id}`;
  db.query(sql, function (err, results, next) {
    if (results) {
      return res.status(200).send({
        status: "success",
        data: results,
      });
    } else {
      return res.status(400).send({
        status: "fail",
        message: err,
      });
    }
  });
};
exports.deletetask = (req, res) => {
  var id = req.params["id"];
  var sql = `DELETE FROM task WHERE id=${id}`;

  db.query(sql, function (error, result) {
    if (result) {
      return res.status(200).send({
        status: "success",
        message: "success full deleted",
      });
    } else {
      return res.status(400).send({
        status: "fail",
        message: error,
      });
    }
  });
};
