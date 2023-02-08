import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game, Comment } from '../models/models';
import { BggService } from '../service/bgg.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnDestroy{

  params$!: Subscription
  comments: Comment[] = []

  constructor(private activedRoute: ActivatedRoute, private router: Router, private bggSvc: BggService){}
  
  ngOnInit(): void {
    this.params$ = this.activedRoute.params.subscribe(
      params => {
        const gameId = params['gameId']
        this.bggSvc.getCommentsById(gameId)
          .then(result => {
            this.comments = result
            console.log(">>> comments:", this.comments)
          })
          .catch(error => {
            console.error(">>> error: ", error)
          })
      }
    )
    
  }

  ngOnDestroy(): void {}
}
