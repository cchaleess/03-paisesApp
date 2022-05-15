import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://restcountries.com/v2';
  private params = new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  

  constructor(private http: HttpClient) { }
    //retorno valor para cualquiera que use este servicio

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.params});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${termino}`,{params: this.params});
}

buscarPaisPorId(id: string): Observable<Country> {
  var pepe =  this.http.get<Country>(`${this.apiUrl}/alpha/${id}`)
  console.log(pepe);
  return pepe;
  ;
}

buscarPaisPorRegion(region: string): Observable<Country[]> {
  return this.http.get<Country[]>(`${this.apiUrl}/regionalbloc/${region}`, {params:this.params}).pipe(
    tap(console.log)
    );
  }
}
