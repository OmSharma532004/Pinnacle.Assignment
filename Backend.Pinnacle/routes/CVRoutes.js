const express = require('express');
const { uploadCV, searchCVs, rankCVs, getAllCVs, getCV } = require('../controller/CVsController');
const router = express.Router();


router.post('/upload', uploadCV);
router.get('/search', searchCVs);
router.get('/rank', rankCVs);
router.get('/getAllCvs',getAllCVs);
router.get('/getCv/:id',getCV);
module.exports = router;
