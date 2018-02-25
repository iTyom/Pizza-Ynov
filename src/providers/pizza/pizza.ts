import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../../modeles/pizza';


@Injectable()
export class PizzaProvider {
data: any;

private readonly url = 'http://kim.jcatania.io:3000/pizza';

  constructor(public http: HttpClient) {
  }

  get(){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get(this.url).subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    })
  }


  getById(id:string){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.url + "/" + id).subscribe(data => {
        this.data = data;
        resolve(this.data);
      })
    })
  }


  delete(id: string){
    return new Promise(resolve => {
      this.http.delete(this.url + "/" + id).subscribe(data => {
        this.data = Array.of(data);
        resolve(this.data);
      })
    })
  }



  add(pizza: Pizza){
    let headers = {
        'Content-Type': 'application/json'
    };

    return new Promise(resolve => {
      this.http.post(this.url, pizza).subscribe(data => {
        resolve(this.data);
      })
    });
  }
}
