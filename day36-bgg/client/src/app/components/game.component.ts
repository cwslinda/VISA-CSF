import { Component, OnInit } from '@angular/core';
import { Game } from '../models/models';
import { BggService } from '../service/bgg.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  

  games: Game[] = []

  constructor(private bggSvc: BggService){ }

  ngOnInit(): void {
    this.bggSvc.getGames()
      .then(result => {
        this.games = result
        console.log('result:', result)
      })
      .catch(error => {
        console.error(">>> error ", error)
      })

  }

}
