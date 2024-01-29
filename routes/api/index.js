const router = require("express").Router();
const userRoutes = require('./userRoutes');

// Define your API routes here
router.use('/users', userRoutes);



module.exports = router;
