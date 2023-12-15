import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/Persona.modelo';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-seccion-persona',
  templateUrl: './seccion-persona.component.html',
  styleUrl: './seccion-persona.component.css'
})
export class SeccionPersonaComponent implements OnInit{
  personas:Persona[] = []
  formEliminar!: FormGroup

  constructor(private _api : ApiService, private form : FormBuilder){
    this.formEliminar = this.form.group(
      {name : ["", Validators.required]}
    )
  }

  ngOnInit(): void {
    this._api.getPersonas().subscribe((data:Persona[]) => {
      this.personas = data
    })
  }

  deletePerson(){
    this._api.deletePersona(this.formEliminar.value.name).subscribe(data => this.ngOnInit())
    this.formEliminar.reset()
  }

}
