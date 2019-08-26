import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  public url;

  constructor(
      public http: HttpClient) {
        //this.url = 'http://localhost/nosotras/public/api';
        this.url = 'http://nosotras.kuix.la/api';
       }

   get( method:any){
    
    return this.http.get(this.url +'/'+  method );
  }

  post( url:any ,body:any ){
    
    let postData = {
      body
    }

    return this.http.post(this.url +'/'+url, postData, { 
      headers: {
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'*'}
      }
      );
  }
}
