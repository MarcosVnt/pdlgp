import { PartidoService } from '../../services/partido.service';
import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Partido } from '../../modelos/partido';


@Component({
  selector: 'msm-partido-list',
  templateUrl: './partido-list.component.html',
  styles: []
})
export class PartidoListComponent implements OnInit {


 // partido = new Partido ('1','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/1', 'http://lorempixel.com/300/200/sports/1', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones');

/*partidos : Partido[] = [
new Partido ('1','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/1', 'http://lorempixel.com/300/200/sports/1', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),
new Partido ('2','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/2', 'http://lorempixel.com/300/200/sports/2', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),
new Partido ('3','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/3', 'http://lorempixel.com/300/200/sports/3', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),
new Partido ('4','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/4', 'http://lorempixel.com/300/200/sports/4', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),
new Partido ('5','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/5', 'http://lorempixel.com/300/200/sports/5', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),
new Partido ('6','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/6', 'http://lorempixel.com/300/200/sports/6', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),
new Partido ('7','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/7', 'http://lorempixel.com/300/200/sports/7', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),
new Partido ('8','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/8', 'http://lorempixel.com/300/200/sports/8', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),

];*/

  constructor(private partidoService: PartidoService) { }

  //eventEmitter
  @Output() selectedEvent: EventEmitter<Partido> = new EventEmitter<Partido>();

  partidos: Partido[] = [];
  selectedPartido: Partido;

  ngOnInit() {
    this.partidos = this.partidoService.getPartidos();
  }
  onSelect(partido: Partido) {
    this.selectedEvent.emit(partido);
    console.log(partido);
  }

}
