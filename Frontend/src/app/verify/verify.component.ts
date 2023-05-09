import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription, interval } from 'rxjs';
// import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { SignupService } from 'src/app/service/signup.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  
  WIDTH = 200;
  HEIGHT = 200;

  @ViewChild("video")
  public video!: ElementRef;

  @ViewChild("canvas")
  public canvas!: ElementRef;

  captures: string[] = [];
  myImage:any="assets/images/Check.png";
  error: any;
  isCaptured!: boolean;
  check=true;
  signUpForm!:FormGroup;
  selectedFileNames: string[] = [];
  progressInfos: any[] = [];
  message: string[] = [];
  previews: string[] = [];
  imageInfos?: Observable<any>;
  selectedFiles?: FileList;
  isLoading=false;
  size = 1024*1024;
  size_limit :boolean =false;
  fileToUpload: any;
  secret = 'YESRUNFUNCTION';
  isSubmited:any=false;
  arrs: any;
  //  arrs=[]
  // $key!: string;
  employe:any = [];
  admin:any;
  emailStore:any
  userArray: any[] = [];
  

  // async ngAfterViewInit() {
  //   await this.setupDevices();
  // }
  constructor(public dialog: MatDialog,private http:HttpClient,private signupService:SignupService,) {
  }

  ngOnInit(): void {
    //console.log(document.getElementById("canvas"))
//     this.updateSubscription = interval(1000).subscribe(
//       (val) => { this.updateStats()
//     }

// );
    this.signUpForm=new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      aadharno:new FormControl(''),
      dob:new FormControl(''),
      address:new FormControl(''),
      pannumber:new FormControl(''),
      avatar:new FormControl(''),
      selfie:new FormControl('')
    })

    const email=localStorage.getItem('email');
    console.log(email)

    this.http.get("http://Localhost:8084/getUserData/{user_id}").subscribe(res=>{
      console.log(res)
      const arrayOfObj = Object.entries(res).map((e) => ({
        [e[0]]: e[1],
      }));
      const splitKeyValue = (obj: { [x: string]: any }) => {
        const keys = Object.keys(obj);
        const res = [];
        for (let i = 0; i < keys.length; i++) {
          res.push({
            asset: keys[i],
            quantity: obj[keys[i]],
          });
        }
        return res;
      };
      arrayOfObj.map((value) => {
        let temp = [];
        temp = splitKeyValue(value);
        this.userArray.push(temp[0].quantity);
      });

     
      // console.log(this.emailStore._value);
      console.log(this.userArray[0].email);

      this.admin = this.userArray.filter(
        (user) => user.email == email
      );
      console.log(this.admin[0].name)
      this.signUpForm.controls['name'].setValue(this.admin[0].name);
      this.signUpForm.controls['email'].setValue(this.admin[0].email);
      this.signUpForm.controls['aadharno'].setValue(this.admin[0].aadharno);
      this.signUpForm.controls['dob'].setValue(this.admin[0].dob);
      this.signUpForm.controls['address'].setValue(this.admin[0].address);
      this.signUpForm.controls['pannumber'].setValue(this.admin[0].pannumber);
    })
    


    
   
  }
  updateStats() {
    throw new Error('Method not implemented.');
  }


}
