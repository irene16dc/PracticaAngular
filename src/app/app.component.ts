import { Component } from '@angular/core';
import {Persona} from './persona';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personaArray:Persona[]=[
    { id: 1, nombre: "ana",apellidos:"apellido", edad: 25 , dni: "254678M" ,cumpleanos: '16/2/22' ,
    colorFavorito: 'rojo',  sexo: 'Hombre'},
    {  id: 2,nombre: "pedro",apellidos:"apellido", edad: 25 , dni: "254678M" ,cumpleanos: '16/2/22' ,
    colorFavorito: 'rojo',  sexo: 'Hombre'},
    { id: 3, nombre: "Juan",apellidos:"apellido", edad: 25 , dni: "254678M" ,cumpleanos: '16/2/22' ,
    colorFavorito: 'rojo',  sexo: 'Hombre'}
  ];


  SelectedPersona: Persona= new Persona();

  addEdit(){
     if (this.SelectedPersona.id===0) {
       let fecha  = new Date(this.SelectedPersona.cumpleanos);
          let day = fecha.getDate();
          let month = fecha.getMonth()+1;
          let year = fecha.getFullYear();
          let  fechaComple=day+"/"+month+"/"+year;
          this.SelectedPersona.cumpleanos=fechaComple;
          if(this.SelectedPersona.edad > 0 && this.SelectedPersona.edad <= 125){
            this.SelectedPersona.id=this.personaArray.length+1;
            this.personaArray.push(this.SelectedPersona);
          }

     }




    this.SelectedPersona= new Persona();
  }

  Edit(persona:Persona){
    this.SelectedPersona=persona;
  ;
  }
  delete(posicion:number){
    if (confirm('Estas seguro de querer eliminarlo?')) {
      this.personaArray.splice( posicion , 1 );
    }
  }


}
