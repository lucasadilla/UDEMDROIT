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
                user: process.env.SMTP_USER, // Replace with your SMTP username
                pass: process.env.SMTP_PASS, // Replace with your SMTP password
            },
        });

        // Format the email content
        const emailContent = `
            Objet: ${objet}
            Message: ${message}
            Nom: ${nom}
            Courriel: ${email}
        `;

        try {
            // Send email using Nodemailer
            await transporter.sendMail({
                from: email,
                to: 'lucas.pentlandhyde@gmail.com',
                subject: objet,
                text: emailContent,
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