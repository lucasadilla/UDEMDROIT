import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nom, email, objet, message } = req.body;

        // Configure Nodemailer with SMTP settings
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Replace with your SMTP server
            port: 587, // Replace with your SMTP port
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'lucas.pentlandhyde@gmail.com', // Replace with your SMTP username
                pass: 'eiaa rrit ydxs avyr', // Replace with your SMTP password
            },
        });

        try {
            // Send email using Nodemailer
            await transporter.sendMail({
                from: email,
                to: 'femmesetdroit.udem@gmail.com',
                subject: objet,
                text: message,
            });

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}