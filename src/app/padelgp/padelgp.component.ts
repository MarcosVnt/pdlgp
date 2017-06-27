import { Partido } from './../modelos/partido';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msm-padelgp',
  templateUrl: './padelgp.component.html',
  styleUrls: ['./padelgp.component.css']
})
export class PadelgpComponent implements OnInit {

  selectedPartido: Partido;

  constructor() { }

  ngOnInit() {
  }

  selectPartido(partido: Partido) {
    this.selectedPartido = partido;
  }

}
