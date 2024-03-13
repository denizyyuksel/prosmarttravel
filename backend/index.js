import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import transferRoute from "./routes/transfers.js";

import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";
import transferBookingRoute from "./routes/transferBookings.js"; // The route file for transfer bookings

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: ["http://prosmarttravel.com", "https://prosmarttravel.com"],
    credentials: true,
};

// Connect to MongoDB
mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error.message);
    }
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/auth", authRoute);
app.use('/tours', tourRoute);
app.use('/transfers', transferRoute);
app.use('/transfer-booking', transferBookingRoute); // Using the transfer booking routes

app.use('/users', userRoute);
app.use('/review', reviewRoute);
app.use('/booking', bookingRoute);


app.listen(port, () =>{
connect();
console.log(`Server is running on port ${port}`)});


