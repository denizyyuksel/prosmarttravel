import TransferBooking from '../models/TransferBooking.js' // Assuming you have a separate model for Transfer Bookings
import { sendEmail } from "../utils/mailer.js"; // Ensure this path is correct

  
export const createTransferBooking = async (req, res) => {
    const newTransferBooking = new TransferBooking(req.body);
    
    try {
        const savedTransferBooking = await newTransferBooking.save();
        console.log(savedTransferBooking);

        // Email content, customized for transfer booking
        const formattedMessage = `
            <html><body>
            <h1>New Transfer Booking</h1>
            <p>A new transfer has been booked. Details are as follows:</p>
            <ul>
                <li>Transfer From: ${savedTransferBooking.transferFrom}</li>
                <li>Transfer To: ${savedTransferBooking.transferTo}</li>
                <li>Full Name: ${savedTransferBooking.fullName}</li>
                <li>Flight Number: ${savedTransferBooking.flightNumber}</li>
                <li>Names of Passengers: ${savedTransferBooking.passengerNames}</li>
                <li>Phone: ${savedTransferBooking.phone}</li>
                <li>Email: ${savedTransferBooking.userEmail || 'N/A'}</li>
                <li>Pickup Date: ${new Date(savedTransferBooking.transferDate).toLocaleDateString()}</li>
            </ul>
            </body></html>`;

        // Constructing the params object for sendEmail
        const emailParams = {
            Destination: {
                ToAddresses: [savedTransferBooking.userEmail] // Assuming you want to send to the user's email
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: formattedMessage
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'New Transfer Booking'
                }
            },
            Source: 'prosmarttravel@gmail.com', // Sender's email address
        };

        // Send the email using the modified sendEmail call
        await sendEmail(emailParams);
  
        res.status(200).json({ success: true, message: 'Your transfer is booked', data: savedTransferBooking });
    } catch (error) {
        console.error("Error processing booking: ", error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
    // get single booking
    export const getTransferBooking =async (req,res)=>{
        const  id = req.params.id
        try {
            const book = await TransferBooking.findById(id)
            res.status(200).json({success:true, message:'successful',data:book})
        }
        catch (error) {
            res.status(404).json({success:true, message:'not found'})
        }
    }

        // get all booking
        export const getAllTransferBooking =async (req,res)=>{
            try {
                const books = await TransferBooking.find()
                res.status(200).json({success:true, message:'successful',data:books})
            }
            catch (error) {
                res.status(500).json({success:true, message:'internal server error'})
            }
        }

 