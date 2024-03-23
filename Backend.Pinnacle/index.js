const express = require("express");
const app = express();
const database = require("./config/database");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT;
database.connect();
const userRoutes = require("./routes/User");
const cvRoutes = require('./routes/CVRoutes');

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", userRoutes);
app.use('/api/cv', cvRoutes);

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})