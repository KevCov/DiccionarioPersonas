import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona, listaPersonas } from '../models/Persona.modelo';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css'
})
export class IngresoComponent {
  formPersona: FormGroup

  constructor( private form : FormBuilder, private _api : ApiService){
    this.formPersona = this.form.group({
      nombre : ['', Validators.required],
      apellido : [''],
      dni : [''],
      edad : ['']
    })
  }

  saveData(){
    this._api.guardarPersona(this.formPersona.value).subscribe(data => data)
    this.formPersona.reset();
    alert("¡Ingreso exitoso!")
  }
}
