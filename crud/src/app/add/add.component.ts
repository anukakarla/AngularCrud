import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private servic:ServicesService,private route:Router) { }
  addForm=new FormGroup({
    username: new FormControl("",[Validators.required]),
    phoneNumber:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required])
  })
  get username(){
    return this.addForm.get("username")

  }
  get phoneNumber(){
    return this.addForm.get("phoneNumber")
  }
  get email(){
    return this.addForm.get("email")
  }

  ngOnInit(): void {
  }

  addDetails(){
    console.log(this.addForm.value);
    
    this.servic.addData(this.addForm.value).subscribe((res:any)=>{
      console.log(res);
      
      window.alert("Data Added successfully")
    })
    this.route.navigate(["/getAll"])
  }
  goBack(){
    this.route.navigate(["/getAll"])
  }

}
