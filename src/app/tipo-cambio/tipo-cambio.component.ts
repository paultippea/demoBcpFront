import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.services';
import {Moneda} from '../classes/moneda';
import { RequestTipoCambio } from '../classes/requestTipoCambio';

@Component({
  selector: 'app-tipo-cambio',
  templateUrl: './tipo-cambio.component.html',
  styleUrls: ['./tipo-cambio.component.css']
})
export class TipoCambioComponent implements OnInit {

  constructor(private _freeApiService:ApiService ){  }
  lstMonedas:Moneda[];
  public cambio:any;

  calcularTipoCambio(monto,monedaOrigen,monedaDestino){
    console.log("calcularTipoCambio");
    var  request= new RequestTipoCambio();
    request.monto = monto;
    request.monedaOrigen = monedaOrigen;
    request.monedaDestino = monedaDestino;
    console.log("request.monto"+request.monto);
    console.log("request.monedaOrigen"+request.monedaOrigen);
    console.log("request.monedaDestino"+request.monedaDestino);
    this._freeApiService.getTipoCambio(request).subscribe(
      
      data=>{
         // console.log("data['montoConTipoCambio']"+data['data']['montoConTipoCambio']);
          this.cambio=data['data']['montoConTipoCambio'];
      }
    );
  }
  
  ngOnInit(){

    this._freeApiService.getMonedas().subscribe(
      data=>{
          this.lstMonedas=data;
      }
    );
  
    }

}
