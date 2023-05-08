package com.psl.OnlineKYC;

//import com.twilio.Twilio;
//import com.twilio.rest.api.v2010.account.Message;
//import com.twilio.type.PhoneNumber;
//
//public class test {
// // Twilio account details
// public static final String ACCOUNT_SID = "AC2358ae8f028a3a5db1e13d3e135c8f39";
// public static final String AUTH_TOKEN = "21b15ddd0a8b2a61a249e67b4460dbc2";
// public static final String TWILIO_PHONE_NUMBER = "+15075965607";
//
// public static void main(String[] args) {
//  // Initialize the Twilio API with your account credentials
//  Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
//
//  // Phone number to send OTP to
//  String phoneNumber = "+917619299945";
//
//  // Generate a 6-digit OTP
//  int otp = (int) (Math.random() * 900000) + 100000;
//
//  // Build the message
//  String messageBody = "Your OTP is " + otp;
//  Message message = Message.creator(
//                  new PhoneNumber(phoneNumber),
//                  new PhoneNumber(TWILIO_PHONE_NUMBER),
//                  messageBody)
//          .create();
//
//  // Print the message SID to confirm the message was sent successfully
//  System.out.println("Message SID: " + message.getSid());
// }
//}

//
//import org.bytedeco.opencv.global.opencv_imgcodecs;
//import org.bytedeco.opencv.global.opencv_imgproc;
//import org.bytedeco.opencv.opencv_core.Mat;
//import org.bytedeco.opencv.opencv_face.FaceRecognizer;
//public class test {
// public static void main(String[] args) {
//
// Mat img1 = opencv_imgcodecs.imread("sarangPhoto.png");
// Mat img2 = opencv_imgcodecs.imread("sarangPhoto.png");
// FaceRecognizer recognizer = org.bytedeco.opencv.opencv_face.LBPHFaceRecognizer.create();
// recognizer.read("trained_model.xml");
// Mat gray1 = new Mat();
// Mat gray2 = new Mat();
// opencv_imgproc.cvtColor(img1, gray1, opencv_imgproc.COLOR_BGR2GRAY);
// opencv_imgproc.cvtColor(img2, gray2, opencv_imgproc.COLOR_BGR2GRAY);
// opencv_imgproc.resize(gray1, gray1, new org.bytedeco.opencv.opencv_core.Size(200, 200));
// opencv_imgproc.resize(gray2, gray2, new org.bytedeco.opencv.opencv_core.Size(200, 200));
//
//int[] label = new int[1];
// double[] confidence = new double[1];
//
// recognizer.predict(gray1, label, confidence);
// int predictedLabel1 = label[0];
// double predictedConfidence1 = confidence[0];
//
//
// recognizer.predict(gray2, label, confidence);
// int predictedLabel2 = label[0];
// double predictedConfidence2 = confidence[0];
//
// boolean isMatch = predictedLabel1 == predictedLabel2 && predictedConfidence1 < 80.0 && predictedConfidence2 < 80.0; if (isMatch) {
// System.out.println("The faces match");
// } else {
// System.out.println("The faces do not match");
// }
// }
//}


import com.google.zxing.BinaryBitmap;
import com.google.zxing.MultiFormatReader;
import com.google.zxing.NotFoundException;
import com.google.zxing.Result;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.common.HybridBinarizer;

import javax.imageio.ImageIO;
import java.io.File;
import java.io.IOException;

public class test{
    public static void main(String[] args) throws IOException, NotFoundException {
     File file = new File("regina.png");
     Result r;
     r = new MultiFormatReader().decode(new BinaryBitmap(new HybridBinarizer(new BufferedImageLuminanceSource(ImageIO.read(file)))));
     System.out.println(r.getText());
     System.out.println(r.getText().getClass());
     System.out.println(r);
     System.out.println(r.getClass());
    }
}

