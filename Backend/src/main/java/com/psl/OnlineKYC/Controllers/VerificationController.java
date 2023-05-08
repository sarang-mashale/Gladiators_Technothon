package com.psl.OnlineKYC.Controllers;

import com.psl.OnlineKYC.Dao.UserRepo;
import com.psl.OnlineKYC.Entities.UserDetailsEntity;
import com.psl.OnlineKYC.Services.CompareDetailsService;
import com.psl.OnlineKYC.Services.EmailVerificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class VerificationController {

    @PostMapping("/emailVerification")
    public String emailVerification(){
        EmailVerificationService service=new EmailVerificationService();
        if(service.verifyMail("harshadakutre5526@gmail.com")==true){
            return "Successfully completed Email Verification";
        }
        else {
            return "Email Verification could not be done";
        }
    }


    @Autowired
    private UserRepo repo;
    @PostMapping("/user")
    public ResponseEntity<UserDetailsEntity> signup(@RequestBody UserDetailsEntity user) {
        System.out.println("Entered controller");
        System.out.println(user);
        return ResponseEntity.ok(repo.save(user));
    }
}

