import { Partido } from './../modelos/partido';
import { Injectable } from '@angular/core';

@Injectable()
export class PartidoService {


  partidos : Partido[] = [
new Partido ('1','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/1', 'http://lorempixel.com/300/200/sports/1', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),
new Partido ('2','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/2', 'http://lorempixel.com/300/200/sports/2', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),
new Partido ('3','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/3', 'http://lorempixel.com/300/200/sports/3', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),
new Partido ('4','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/4', 'http://lorempixel.com/300/200/sports/4', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),
new Partido ('5','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/5', 'http://lorempixel.com/300/200/sports/5', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),
new Partido ('6','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/6', 'http://lorempixel.com/300/200/sports/6', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),
new Partido ('7','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/7', 'http://lorempixel.com/300/200/sports/7', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),
new Partido ('8','First partido', 'First partido description', 'http://lorempixel.com/300/200/sports/8', 'http://lorempixel.com/300/200/sports/8', 'jugador1', 'jugador2', 'jugador3', 'jugador4', 'lugar', 'fecha', 'hora', 'modalidad', 'observaciones'),

];

  constructor() { }


getPartidos() {
  return this.partidos;
}



}
