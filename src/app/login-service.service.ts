import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers } from '@angular/http';


@Injectable()
export class LoginServiceService {
  constructor (
    private http: Http
  ) {}

  getUser(data: Object) {
    // console.log(data);
    let sampled= {"name":"test","job":"it"}

    let url="https://reqres.in/api/users";
    // let header=new Headers({'Content-Type': 'application/json', 'Authorization': 
    //     'Bearer '+localStorage.getItem("access_token")});
    let headers = new Headers({ "content-type": "application/json", });
    let options = new RequestOptions({ headers: headers });
    // console.log("SDFSDFsd");
    return this.http
    .post(url, JSON.stringify(sampled), options)
    .map((res:Response) => res.json());
    // console.log("SDFSDFSDF")
    // return data;
  
  
  
  }

    // return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
    // .map((res:Response) => res.json());
  }


