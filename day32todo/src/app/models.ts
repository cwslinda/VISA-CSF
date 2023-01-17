export interface Todo{
    name:string,
    email:string,
    tasks: Task[]
    
}

export interface Task{
    task:string,
    priority: string,
    dueDate: string
}