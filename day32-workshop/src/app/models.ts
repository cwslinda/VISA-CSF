export interface Task {
    description: string,
    priority: string,
    dueDate: Date,
    completed: boolean,
}

export interface Todo{
    tasks: Task[]
}