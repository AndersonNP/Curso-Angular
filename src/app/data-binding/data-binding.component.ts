import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  url: string = 'http//loiane.com'
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/400/200'
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert("Botão clicado");
  }

  onKeyUp(valor: string){
    this.valorAtual = valor;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
    
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
}
