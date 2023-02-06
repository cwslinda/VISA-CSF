import { Component, OnInit } from '@angular/core';
import { Task } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'day32-workshop';

  task!: Task
  tasks: Task[] = []

  ngOnInit(): void {
    const jsonString = localStorage.getItem('tasks')
    if(!!jsonString){
      this.tasks = JSON.parse(jsonString)
    }

    console.log(`main app > ${this.tasks}`)
  }


  add(task: Task){
    this.tasks.push(task)
    const jsonString = JSON.stringify(this.tasks)
    console.log(`to be saved > ${jsonString}`)
    localStorage.setItem('tasks', jsonString)
  }

  update(tasks: Task[]){
    const jsonString = JSON.stringify(this.tasks)
    console.log(`after completion > ${jsonString}`)
    localStorage.setItem("tasks", jsonString)
  }

  delete(tasks: Task[]){
    const jsonString = JSON.stringify(this.tasks)
    console.log(`after deletion > ${jsonString}`)
    localStorage.setItem("tasks", jsonString)
  }
}
