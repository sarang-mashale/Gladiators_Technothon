import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
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
  

  async ngAfterViewInit() {
    await this.setupDevices();
  }
  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    //console.log(document.getElementById("canvas"))
    this.signUpForm=new FormGroup({
      name:new FormControl('', Validators.required),
      email:new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      aadharno:new FormControl('', [Validators.pattern('^[0-9]{12}$'), Validators.required]),
      dob:new FormControl('', Validators.required),
      address:new FormControl('', Validators.required),
      pannumber:new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{12}")]),
      avatar:new FormControl('', Validators.required),
      selfie:new FormControl('', Validators.required)
    })


    
   
  }

  get aadharno() {
    return this.signUpForm.get('aadharno');
  }
  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get dob() {
    return this.signUpForm.get('dob');
  }

  get address() {
    return this.signUpForm.get('address');
  }

  get pannumber() {
    return this.signUpForm.get('pannumber');
  }

  get avatar() {
    return this.signUpForm.get('avatar');
  }

  load() : void {
    this.isLoading = true;
    setTimeout( () => this.isLoading = false, 2000 );
  }


  onSubmit(){
    // this.isLoading=true;
    console.log(this.isLoading)
    if (!this.signUpForm.valid) {
      
      return;
    }
    // this.http.post("https://new-demo-b9add-default-rtdb.firebaseio.com/user.json",this.signUpForm.value).subscribe(res=>{
    //   console.log(res)
    // })
    // this.signupService.signUp(this.signUpForm.value).subscribe(res=>{
    //   console.log(res)
    // })
    
    // this.isLoading=true;
    this.load();
      console.log(this.signUpForm.value);
      // this.isLoading=false;
      console.log(this.isLoading)
      console.log(this.signUpForm.value.email)
      // this.signUpForm.reset();
      localStorage.setItem("email",this.signUpForm.value.email)
   
  }

  




  async setupDevices() {
    this.check=true;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        if (stream) {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
          this.error = null;
        } else {
          this.error = "You have no output video device";
        }
        
        
      } catch (e) {
        this.error = e;
      }
    }
  }

  stoped(){
    this.video.nativeElement.stop()
  }

  capture() {
    this.drawImageToCanvas(this.video.nativeElement);
    let img=this.canvas.nativeElement.toDataURL("image/png");
    console.log(img)
    this.signUpForm.controls['selfie'].setValue(img);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    this.isCaptured = true;
    this.check=false;
    // console.log(this.captures)


    
  }

  removeCurrent() {
    this.isCaptured = false;
    this.check=true
  }

  setPhoto(idx: number) {
    this.isCaptured = true;
    var image = new Image();
    image.src = this.captures[idx];
    this.drawImageToCanvas(image);
  }

  drawImageToCanvas(image: any) {
    this.canvas.nativeElement
      .getContext("2d")
      .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
  }

  onEdit(){

  }

  // onEdit(index){
  //   this.editMode = true;
  //   this.editIndex = index;
  //   this.ngxSmartModalService.open('myModal');
  //   this.form.setValue({
  //     rec:this.data[index].recipient,
  //     msg:this.data[index].message
  //   });
  // }

  // closeModal(id){
  //    this.form.reset();
  //   this.editMode=false;
  //   this.ngxSmartModalService.close(id);
  // }


  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;
    

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          console.log(e.target.result);
        //   if(this.size> 500000){//5mb //50kb
        //     alert(this.size+"size");
        //     //boolean true
        //     this.size_limit =true;
        // }
        // if(this.size_limit){
        //   alert("lotfan size kamtar entekhab konid");
        //       }
        //       else{
        //    reader.readAsDataURL(this.fileToUpload);
        //       }
          this.signUpForm.controls['avatar'].setValue(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  // generate(): void {
  //   const dialogRef = this.dialog.open(PopupComponent, {
  //     width: '250px',
  //   });

  //   dialogRef.afterClosed().subscribe(password => {
  //     const isPwdValid = password === this.secret;
  //     console.log(isPwdValid);
  //     if (isPwdValid) {
  //       // run code for correct password 
  //     } else {
  //       // run code for wrong password
  //     }
  //   });}

}
