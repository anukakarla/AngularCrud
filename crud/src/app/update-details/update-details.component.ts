import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
result:any;
  selectedgetAll: any;

  constructor(private servic:ServicesService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log(this.selectedgetAll);
    
    
    let id=this.route.snapshot.params['id']
    console.log(id);
    
    this.servic.getData().subscribe((data:any)=>{
      this.result=data
      for(let r of this.result){
        if (r.id==id) {
          this.selectedgetAll=r;
          
          
        }
      }
    })


  }
  updateDetails(form:NgForm){
    console.log(form.value);
    
    this.servic.updateData(this.selectedgetAll.id,form.value).subscribe((r:any)=>{
      console.log(r);
      window.alert("updated successfully")
      this.servic.reloadData(true)
      
    })
    this.router.navigate(["/getAll"])

  }
  goBack(){
    this.router.navigate(["/getAll"])
  }

}
