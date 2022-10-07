import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clienteForm!: FormGroup

  constructor(private readonly formBuilder: FormBuilder) { }

  placeholderName: string = 'Ingrese nombre del cliente'
  placeholderTel: string = 'Número de telefóno'
  placeholderTel2: string = 'Teléfono adicional'
  placeholderEmail: string = 'Ingrese correo electronico'
  placeholderDirecc: string = 'Ingrese dirección exacta'

  cliente: any = [];
  clientes: any[] = [];

  ngOnInit(): void {
    this.clienteForm = this.initForm()
    this.onPatchValue()
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      tel1: ['', [Validators.required]],
      tel2: ['', [Validators.required]],
      email: ['', [Validators.required]],
      direc: ['', [Validators.required]]
    })
  }

  onPatchValue() {
    this.clienteForm.patchValue({ name: '' })
  }

  onSubmit() {
    console.log(this.clienteForm)
  }
  guardar() {
    this.clientes.push(this.cliente);
    this.cliente = {}
  }

  showTable: boolean = false

  show(): void {
    this.showTable = true
  }

}
