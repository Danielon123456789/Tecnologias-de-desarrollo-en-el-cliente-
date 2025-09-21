import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeftPanelComponent } from '../left-panel/left-panel.component';
import { RightPanelComponent } from '../right-panel/right-panel.component';

@Component({
  selector: 'app-parent',
  imports: [CommonModule,LeftPanelComponent,RightPanelComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  //Lista hardcodeada de titulos.
  items = [
    {
      title: "El señor de los anillos",
      author: "J.R.R. Tolkien",
      year: 1954,
      genre: "Fantasía"
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      genre: "Ciencia ficción"
    },
    {
      title: "Bohemian Rhapsody",
      artist: "Queen",
      year: 1975,
      genre: "Rock"
    },
    {
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      year: 1967,
      genre: "Realismo mágico"
    },
    {
      title: "La La Land",
      director: "Damien Chazelle",
      year: 2016,
      genre: "Musical"
    }
  ];

  selectedItem: any = null ;

  onSelect(item: any){
    this.selectedItem = item;
  }

  onClear(){
    this.selectedItem = null;
  }
}
