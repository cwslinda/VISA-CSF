import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Task, Todo } from '../models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


  @Output()
  onNewTodo = new Subject<Todo>()

  @Input()
  todo: Todo|null = null

  form!: FormGroup
  taskArray!: FormArray
  
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.form = this.createForm()
  }

  save(){
    const todo: Todo = this.form.value as Todo
    console.log("form >>>", todo)
    this.onNewTodo.next(todo);
  }


  addTasks(){
    this.taskArray.push(this.createTask())
  }

  deleteTask(i: number){
    this.taskArray.removeAt(i)
  }

  private createForm(todo: Todo|null=null): FormGroup{
    this.taskArray = this.createTasks(todo?.tasks? todo.tasks:[])
    return this.fb.group({
      name: this.fb.control(todo?.name? todo.name:""
          , [Validators.required, Validators.minLength(3)]),
      email: this.fb.control(todo?.email?todo.email:""
          , [Validators.required]),
      tasks: this.taskArray
    })
  }

  private createTasks(tasks:Task[] = []): FormArray {
    return this.fb.array(
      tasks.map(t => this.createTask(t))
    )
  }

  private createTask(task: Task| null=null): FormGroup{
    return this.fb.group({
      task: this.fb.control(task?.task? task.task:"", [Validators.required]),
      priority: this.fb.control(task?.priority? task.priority:"", [Validators.required]),
      dueDate: this.fb.control(task?.dueDate? task.dueDate:"", [Validators.required])
    })
  }
}
