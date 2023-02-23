import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemService } from '../service/item.service';
import { SharingService } from '../service/sharing.service';

@Component({
  selector: 'app-confirm-item',
  templateUrl: './confirm-item.component.html',
  styleUrls: ['./confirm-item.component.css']
})
export class ConfirmItemComponent implements OnInit {

  param$!: Subscription
  postingId!: string
  
  
  constructor(private ar: ActivatedRoute, private shareSvc: SharingService, private svc: ItemService ){}
  
  
  
  ngOnInit(): void {
    this.param$ = this.ar.params.subscribe(
      (params) => {
        this.postingId = params['postingId']
      }
    )
  }

}
