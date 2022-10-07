import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable , map , tap} from 'rxjs';
import { Proveedor } from '../interfaces/proveedor';
import { Proveedores } from '../interfaces/proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private readonly API_URL : string = environment.API_URL
  private readonly API_KEY : string = environment.API_KEY

  constructor(private readonly http : HttpClient) { }

  findAll() : Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>(`${this.API_URL}/proveedor?select=*`, {
      headers: {
        'apikey' : this.API_KEY
      }
    })
  }

 





}
