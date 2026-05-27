const inquiries = [];

const createInquiry = (req, res) => {
const { name, email, message } = req.body;
if (!name || !email || !message) {
return res.status(400).json({ success: false,
  message: 'All fields are required' });
}

if (!email.includes("@")) {
  return res.status(400).json({
    success: false,
    message: "Invalid email format",
  });
}

const newInquiry = {
id: Date.now(),
name,
email,
message,
createdAt: new Date()

};

inquiries.push(newInquiry);


res.status(201).json({
success: true,
message: 'Inquiry created successfully',
data: newInquiry
});
}

const getAllInquiries = (req, res) => {
  
res.status(200).json(
  {
    success: true,
    message: 'Inquiries retrieved successfully',
    data: inquiries
  });
};

module.exports = {
  createInquiry,
  getAllInquiries
};