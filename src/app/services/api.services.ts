import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RequestTipoCambio} from '../classes/requestTipoCambio';

@Injectable()
export class ApiService{

    constructor(private  htppclient:HttpClient){}

    getMonedas(): Observable<any>{
        return this.htppclient.get("http://localhost:8081/api/moneda/listarMoneda");
    }

    getTipoCambio(request:RequestTipoCambio): Observable<any>{
        return this.htppclient.post("http://localhost:8081/api/tipocambio/obtenerTipoCambio",request);
    }

}