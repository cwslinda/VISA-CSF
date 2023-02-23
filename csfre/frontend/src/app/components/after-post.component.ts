import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { PostingResult } from '../models/models';
import { ItemService } from '../service/item.service';
import { SharingService } from '../service/sharing.service';

@Component({
  selector: 'app-after-post',
  templateUrl: './after-post.component.html',
  styleUrls: ['./after-post.component.css']
})
export class AfterPostComponent implements OnInit {

  param$!: Subscription
  postingId!: string
  postingResult!: PostingResult


  constructor(private ar: ActivatedRoute, private router: Router, 
              private svc: ItemService, private shareSvc: SharingService){}

  ngOnInit(): void {
    this.param$ = this.ar.params.subscribe(
    (params) => {
      this.postingId = params['postingId']
      console.log(this.postingId)
      this.postingResult = this.shareSvc.sharingValue
      }
    )
  }

  confirmItem(){
    console.log("confirm item")

    this.svc.confirmItem(this.postingId, this.postingResult)
      .then(result => {

        console.log(result)
        this.router.navigate(['/confirm', this.postingId])
      }).catch(
        error => {
          console.log(error)
          alert(error['error']['message'])
        }
      )

  }


}
