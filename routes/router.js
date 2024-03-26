const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const upload = require("../midlewares/uplode");
const dc = require("../controllers/moviecontroler")


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/',dc.homecontroler);
router.post("/movieform",upload.single('poster') ,dc.movieformcontroler);
router.get('/views',dc.viewcontroler );
router.get('/editmovie/:id',dc.editcontroler);
router.get("/deletemovie/:id",dc.deletcontroler);





module.exports = router;