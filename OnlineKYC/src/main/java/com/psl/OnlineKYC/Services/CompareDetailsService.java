package com.psl.OnlineKYC.Services;

import com.google.zxing.BinaryBitmap;
import com.google.zxing.MultiFormatReader;
import com.google.zxing.Result;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.common.HybridBinarizer;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.*;
import java.io.File;

@Service
public class CompareDetailsService {
    public boolean compareInfo(){
        return true;
    }

    public void getInformationForm(){

    }
    public void getInformationQR(Image image){
        try {
            File file = new File("regina.png");
            Result r;
            r = new MultiFormatReader().decode(new BinaryBitmap(new HybridBinarizer(new BufferedImageLuminanceSource(ImageIO.read(file)))));
            System.out.println(r.getText());
            System.out.println(r.getText().getClass());
            System.out.println(r);
            System.out.println(r.getClass());

        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
