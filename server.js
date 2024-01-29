//DEPENDENCIES
//express
const express = require("express")
const routes = require("./routes")
// DATABASE CONNECTION

// APP/PORT
const app = express();
const PORT = process.env.PORT || 4000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// ROUTES
app.use(routes);


// START THE SERVER
app.listen(PORT, () => console.log(`Server running on ${PORT}`))