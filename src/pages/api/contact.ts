import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        console.log('req.body', req.body);
        const { name, email, message } = req.body;

        // Create a transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Replace with your SMTP server
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'breadchaserai@gmail.com', // Replace with your email
                pass: 'TjNtdn*DKMnK4s' // Replace with your email password
            }
        });

        // Set up email data
        const mailOptions = {
            from: email,
            to: 'breadchaserai@gmail.com', // Replace with your company's email
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
