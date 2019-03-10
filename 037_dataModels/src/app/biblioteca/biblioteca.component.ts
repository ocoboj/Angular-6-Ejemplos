import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  libros = [{
    "id": 1,
    "titulo": "El Quijote",
    "autor": "Cervantes"
  }, {
    "id": 2,
    "titulo": "Hamlet",
    "autor": "Shakespeare"
  }];

  constructor() { }

  ngOnInit() {
  }

}
