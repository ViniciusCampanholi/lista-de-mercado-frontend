import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
  }

  abrirProduto(){
    this.router.navigate(['/itemcompra'])
  }

}
