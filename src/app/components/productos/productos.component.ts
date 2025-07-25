import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Producto } from "./productos";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: any[] = [];

  constructor(private http: HttpClient) {

  }
  usuarios: Producto[] = [];

  ngOnInit() {
    this.http.get<Producto[]>('assets/producto.json').subscribe(data => {
      this.productos = data;
    });
  }

}
