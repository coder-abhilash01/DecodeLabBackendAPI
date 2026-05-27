require('dotenv').config();
const express = require('express');
const cors = require('cors');
const inquiryRoutes = require('./src/routes/inquiry.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', inquiryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
