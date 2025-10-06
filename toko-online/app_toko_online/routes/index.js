// dipanggil atau diimport
var express = require("express");
var router = express.Router();
var mainController = require("../controllers/main");

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", {
//     title: "Toko Online Sederhana",
//     products: products,
//     search: "", // supaya tidak undefined di EJS
//   });
// });

router.get("/", mainController.index);
router.get("/search", mainController.search);

// selesaikna dua fungsi route pencarian dengan

module.exports = router;
