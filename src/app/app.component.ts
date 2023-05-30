import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso1';
  localidad="madrid";
  resultado:number=0;
  nombre:string="juan";
  valor=0;
  ver_calculadora_ngmodel:boolean=true;
  numero1="";
  numero2="";

  enviar(){
  //  this.resultado="buenos dias chicos";
  }
  sumar(){
      this.resultado=parseFloat(this.numero1)+parseFloat(this.numero2);

  }
  restar(){
    this.resultado=parseFloat(this.numero1)-parseFloat(this.numero2);

}
multiplicar(){
  this.resultado=parseFloat(this.numero1)*parseFloat(this.numero2);

}
dividir(){
  this.resultado=parseFloat(this.numero1)/parseFloat(this.numero2);

}
sumar_ref(numero1_ref:string,numero2_ref:string){
   this.resultado=parseFloat(numero1_ref)+parseFloat(numero2_ref);
}
restar_ref(numero1_ref:string,numero2_ref:string){
  this.resultado=parseFloat(numero1_ref)-parseFloat(numero2_ref);
}
multiplicar_ref(numero1_ref:string,numero2_ref:string){
  this.resultado=parseFloat(numero1_ref)*parseFloat(numero2_ref);
}
dividir_ref(numero1_ref:string,numero2_ref:string){
  this.resultado=parseFloat(numero1_ref)/parseFloat(numero2_ref);
}
cambiar_estado_calculadora(){
  if(this.ver_calculadora_ngmodel){
    this.ver_calculadora_ngmodel=false;
  }else{
    this.ver_calculadora_ngmodel=true;
  }
}


}
