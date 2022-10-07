import { Proveedor } from "./proveedor";

export interface Proveedores {
    page: number;
    results: Proveedor[];
    total_pages: number;
    total_results: number; 
}
