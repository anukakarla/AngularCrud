import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  reload =new Subject<boolean>();

   reloadData(flag:boolean){
    this.reload.next(flag)
   }

  getData(){
    return this.http.get("http://localhost:4500/user")
  }

  delete(id:any){
    return this.http.delete(`http://localhost:4500/user/${id}`)

  }
  addData(data:any){
    return this.http.post("http://localhost:4500/user",data)
  }
  updateData(_id:any,data:any){
    return this.http.put(`http://localhost:4500/user/${_id}`,data)

  }
}
