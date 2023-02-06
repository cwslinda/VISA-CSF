export interface Task {
    description: string,
    priority: Date,
    dueDate: boolean,
}

export interface Todo{
    tasks: Task[]
}