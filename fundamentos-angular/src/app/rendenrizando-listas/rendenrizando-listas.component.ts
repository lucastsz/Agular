import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/celular';

@Component({
  selector: 'app-rendenrizando-listas',
  templateUrl: './rendenrizando-listas.component.html',
  styleUrls: ['./rendenrizando-listas.component.css']
})
export class RendenrizandoListasComponent {
celulares: Celular[] = [
  {
    id: 1, nome: "Iphone X", descricao: "Celular da Apple", esgotado: false
  },
  {
    id: 2, nome: "Iphone 11", esgotado: false
  },
  {
    id: 3, nome: "Iphone 12", descricao: "Celular da Apple", esgotado: true
  },
]
}
