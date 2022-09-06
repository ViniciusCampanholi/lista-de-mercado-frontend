import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './item-compra.component.html',
  styleUrls: ['./item-compra.component.css']
})
export class ItemCompraComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  adicionarItem(){
    
  }

  cancelarItem(){
    this.router.navigate(['/home'])
  }

}
