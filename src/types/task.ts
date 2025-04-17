export interface Task {
    id: string;
    title: string;
    completed: boolean;
    priority: 'high' | 'medium' | 'low';
    deadline?: Date;
}

export type TaskPriority = 'high' | 'medium' | 'low'; 