const  express = require('express');
const { createInquiry,getAllInquiries } = require('../controllers/inquiry.controllers');

const router = express.Router();

router.post('/inquiries', createInquiry);
router.get('/inquiries', getAllInquiries );

module.exports = router;