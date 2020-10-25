import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(
    public message: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    console.log('Execute Hello World Bean Service');

    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    // console.log('Execute Hello World Bean Service executeHelloWorldBeanServiceWithPathVariable');

    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString 
    // })

    //Use ` instead of ' , then you can use ${name}
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`
    //,
    //{headers}
    );

  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'in28minutes';
  //   let password = 'test';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

  //   return basicAuthHeaderString;
  // }
}
