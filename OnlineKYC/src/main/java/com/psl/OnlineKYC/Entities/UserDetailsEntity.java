package com.psl.OnlineKYC.Entities;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="userdetails")
public class UserDetailsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    private String name;
    private String email;
    private long aadharno;
    private String dob;
    private String address;
    @Column(name = "phonenumber")
    private long pannumber;
    //private String avatar;
    //private String selfie;

}
