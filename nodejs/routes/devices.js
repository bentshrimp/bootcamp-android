var express = require("express");
var router = express.Router();
const mqtt = require("mqtt");
const Sensors = require("../models/sensors");
// MQTT Server 접속
const client = mqtt.connect("mqtt://192.168.201.218");
//웹에서 rest-full 요청받는 부분(POST)
router.post("/led", function (req, res, next) {
  res.set("Content-Type", "text/json");
  if (req.body.flag == "on") {
    // MQTT->fan : 1
    client.publish("led", "1");
    res.send(JSON.stringify({ led: "on" }));
  } else {
    client.publish("led", "2");
    res.send(JSON.stringify({ led: "off" }));
  }
});
// 안드로이드에서 요청받는 부분(POST)
router.post("/device", function (req, res, next) {
  console.log(req.body.sensor);
  if (req.body.sensor == "sensors_") {
    Sensors.find({})
      .sort({ created_at: -1 })
      .limit(10)
      .then((data) => {
        res.send(JSON.stringify(data));
      });
  } else {
    //sensorLogs=dbObj.collection('mq2');
  }
});
module.exports = router;
