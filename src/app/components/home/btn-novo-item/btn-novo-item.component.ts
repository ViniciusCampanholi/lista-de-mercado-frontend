import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-btn-novo-item',
  templateUrl: './btn-novo-item.component.html',
  styleUrls: ['./btn-novo-item.component.css']
})
export class BtnNovoItemComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  addNovoItem(){
    this.route.navigate(['/itemcompra'])
  }

}
