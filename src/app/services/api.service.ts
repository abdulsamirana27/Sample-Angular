import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    //Write code calling service to obtain food fact data
    let url = `http://10.250.10.74:8089/api/routes`;
    return this.http.get(url);
  }
  getAlarm(): Observable<any> {
    let url = `http://10.250.10.74:8089/api/trigger/alarams`;
    return this.http.get(url);
  }

  login(user: any) {
    let obj = {
      username:"admin",
      password:"1234"
    }
    let url = `http://10.250.10.74:8089/api/trigger/alarams`;
    return this.http.post(url,obj);
  }

  FileUpload(file: File) {
    var formData = new FormData();
    formData.append('file', file);
    if (formData.append) {
      return this.http
        .post<any>(
          `http://10.250.10.74:8089/uploadfile`,
          formData
        )
    }
  }

  Fix(id){
   let obj = {
     id:id
   };
      return this.http
        .put<any>(
          `http://10.250.10.74:8089/api/trigger/alarams`,
          obj
        )

  }
}

