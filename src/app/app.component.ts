import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoAngular';

  valorTextBox: string;

  lista: string[] = [];

  adicionarItem(texto: any)
  {
    this.lista.push(texto.value);
  }

  removerItem(texto: string)
  {
    let indiceDoItem = this.lista.indexOf(texto, 0);

    //Remover o item específico usando o indice
    this.lista.splice(indiceDoItem, 1);
  }

}