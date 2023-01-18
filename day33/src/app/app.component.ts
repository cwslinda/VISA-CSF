import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserDetailsComponent } from './components/user-details.component';
import { UserDetails } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'day33';

  users: UserDetails[] = []

  newName!: string


  //@ViewChild('userDetails')
  @ViewChild(UserDetailsComponent)
  userDetails!:UserDetailsComponent

  @ViewChild('h2')
  h2!: ElementRef


  ngAfterViewInit(): void {
    console.info("ngAfterView userDetails", this.userDetails)
  }
  ngOnInit(): void {
    console.info("ngOnInit userDetails:", this.userDetails)
  }

  process(userDetails: UserDetails){
    console.info(">>>> appcomponent:", userDetails)
    this.newName = userDetails.name
    this.users = [...this.users, userDetails]
  }

  deleteUser(){
    console.info('deleteing user')
    const user = this.userDetails.getFormValue()
    console.info('form value:', user)
    this.h2.nativeElement.innerText = user.name
  }

  updateUser(){
    console.info('updating user')
  }
 
}
