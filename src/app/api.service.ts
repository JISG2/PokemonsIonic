import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API : string = 'http://127.0.0.1:3333'

  constructor(
    private http : HttpClient
  ) { }

  getAll(): Observable<any>{
    return this.http.get(`${this.API}/pokemons`)
  }

  getById(id:string) : Observable<any>{
    return this.http.get(`${this.API}/pokemons/${id}`);
  }

  create(item : any) : Observable<any>{
    return this.http.post(`${this.API}/pokemons/`,item);
  }

  update(item:any) : Observable<any>{
    return this.http.put(`${this.API}/pokemons/${item.id}`,item);
  }

  delete(id:number) : Observable<any>{
    return this.http.delete(`${this.API}/pokemons/${id}`);
  }
}
