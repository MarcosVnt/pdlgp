import { Partido } from '../../modelos/partido';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'msm-partido-detail',
  templateUrl: './partido-detail.component.html',
  styleUrls: ['./partido-detail.component.css']
})
export class PartidoDetailComponent implements OnInit {
  @Input() selectedPartido: Partido;

  constructor() { }

  ngOnInit() {
  }

}
