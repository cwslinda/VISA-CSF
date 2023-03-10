import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserDetails } from '../models';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnChanges {
  
  @Input()
  friends: UserDetails[] = []

  @Input()
  name = ""

  count = 0


  ngOnChanges(changes: SimpleChanges): void {
    console.info(">>> changes: ", changes)
    this.count = changes['friends'].currentValue.length
  }

}
