const express = require('express');
const router = express.Router();
const collegeController=require('../controllers/collegeControllers');
const internController=require('../controllers/internControllers')

router.post('/functionup/colleges',collegeController.createCollege);
router.post('/functionup/interns',internController.createIntern);
router.get('/functionup/collegeDetails',collegeController.getCollege)


router.all("/*", function (req, res) {
    res.status(400).send({ status: false, message: "Invalid path params" });
  });

module.exports = router;
