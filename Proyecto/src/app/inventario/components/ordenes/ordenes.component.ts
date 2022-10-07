import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  ordenesForm!: FormGroup

  constructor(private readonly formBuilder: FormBuilder) { }

  placeholderNameP: string = 'Ingrese  producto'
  placeholderNameC: string = 'Ingrese  cliente'
  placeholderTel: string = 'Número telefónico'
  placeholderDirecc: string = 'Ingrese dirección exacta'



  ordenes: any = [];
  ordenesC: any[] = []


  ngOnInit(): void {
    this.ordenesForm = this.initForm()
    this.onPatchValue()
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      nameP: ['', [Validators.required]],
      nameC: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      costo: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      direc: ['', [Validators.required]]
    })
  }

  onPatchValue() {
    this.ordenesForm.patchValue({ name: '' })
  }

  onSubmit() {
    console.log(this.ordenesForm)
  }

  guardar() {
    this.ordenesC.push(this.ordenes);
    this.ordenes = {}
  }

  showTable: boolean = false

  show(): void {
    this.showTable = true
  }


}
