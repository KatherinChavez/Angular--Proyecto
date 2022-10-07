import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productForm! : FormGroup

  constructor(private readonly formBuilder : FormBuilder) { }

  placeholderName: string = 'Ingrese nombre del producto'
  placeholderDescrip: string = 'Ingrese detalle del producto'

  products: any = [];
  productos: any[] = [];

  ngOnInit(): void {
    this.productForm = this.initForm()
    this.onPatchValue()
  } 

  initForm(): FormGroup{
    return this.formBuilder.group({
      name: ['',[Validators.required]],
      descrip: ['',[Validators.required]],
      cantidad: ['',[Validators.required]],
      talla: ['',[Validators.required]]
    })
  }

  onPatchValue(){
    this.productForm.patchValue({name:''})
  }

  onSubmit(){
    console.log(this.productForm) 
  }

  guardar() {
    this.productos.push(this.products);
    this.products = {}
  }
 
  showTable: boolean = false

  show() : void{
    this.showTable = true
  }

}
