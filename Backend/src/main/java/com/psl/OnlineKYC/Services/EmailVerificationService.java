package com.psl.OnlineKYC.Services;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;
import java.util.Random;
import java.util.Scanner;

public class EmailVerificationService {
    public boolean verifyMail(String receiverEmail) {
        Scanner sc=new Scanner(System.in);
        // Sender's email address and password
        String senderEmail = "onlinekycproject420@gmail.com";
        String senderPassword = "iazlkbbiasstfvht";

        // Generate OTP using Random class
        Random random = new Random();
        int otp = random.nextInt(9000) + 1000;
        String message = "Hello, The OTP for KYC Verification is " + otp;

        // Set up properties for SMTP server
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        props.setProperty("mail.smtp.starttls.enable", "true");
        props.setProperty("mail.smtp.ssl.protocols", "TLSv1.2");

        // Create session with SMTP server
        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            protected javax.mail.PasswordAuthentication getPasswordAuthentication() {
                return new javax.mail.PasswordAuthentication(senderEmail, senderPassword);
            }
        });

        try {
            // Create message and set sender, receiver, subject, and content
            Message msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress(senderEmail));
            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(receiverEmail));
            msg.setSubject("Email Verification OTP");
            msg.setText(message);

            // Send message
            Transport transport = session.getTransport("smtp");
            transport.connect("smtp.gmail.com", senderEmail, senderPassword);
            transport.sendMessage(msg, msg.getAllRecipients());
            System.out.println("Email sent successfully with OTP.");
            System.out.println("OTP: ");
            int userOTP=sc.nextInt();
            if(userOTP==otp) {
                System.out.println("Entered OTP matches with OTP sent");
                return true;
            }
            System.out.println("Entered OTP does not matches with the OTP sent");
            return false;
        } catch (Exception e) {
            System.out.println("Error sending email: " + e.getMessage());
            return false;
        }
    }
}
