//DEPENDENCIES
//express
const express = require("express")
// DATABASE CONNECTION

// APP/PORT
const app = express();
const PORT = process.env.PORT || 4000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get("*", (req, res) => res.send("Testing Message 123"))


// START THE SERVER
app.listen(PORT, () => console.log(`Server running on ${PORT}`))