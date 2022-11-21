import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
  result:any;
  id:any;

  constructor(private servic:ServicesService) { }
getData(){
   this.servic.getData().subscribe((data)=>{
      this.result=data
      console.log(this.result);
      


    })
}
  ngOnInit(): void {
   this.getData()
   this.servic.reload.subscribe((flag:Boolean)=>{
    if (flag) {
      this.getData();
      this.servic.reloadData(false)
    }
   })
    

  }
  delete(id:any){
      this.servic.delete(id).subscribe((data)=>{
        console.log(data);
        this.getData()
      })

    }

}
