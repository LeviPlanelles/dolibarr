import type { Project } from "@/types/project";
import type { Task } from "@/types/task";

export const mockProjects : Project[] = [
    { id: 1, label: "Proyecto A", description: 'Demo Alpha' , status: "open" },
    { id: 2, label: "Proyecto B", description: 'Demo Beta' , status: "closed" },
    { id: 3, label: "Proyecto C", description: 'Demo Beta' , status: "open" },
    { id: 4, label: "Proyecto D", description: 'Demo Alpha' , status: "closed" },
    { id: 5, label: "Proyecto E", description: 'Demo Alpha' , status: "open" },
    { id: 6, label: "Proyecto F", description: 'Demo Beta' , status: "open" },
];

export const mockTasks : Task[ ]= [
    { id: 1, projectId: 1, title: "Tarea 1", status: "todo" },
    { id: 2, projectId: 1, title: "Tarea 2", status: "doing" },
    { id: 3, projectId: 2, title: "Tarea 1", status: "todo" },
    { id: 4, projectId: 2, title: "Tarea 2", status: "doing" },
    { id: 5, projectId: 3, title: "Tarea 1", status: "todo" },
    { id: 6, projectId: 3, title: "Tarea 2", status: "doing" },
    { id: 7, projectId: 4, title: "Tarea 1", status: "todo" },
    { id: 8, projectId: 4, title: "Tarea 2", status: "doing" },
    { id: 9, projectId: 5, title: "Tarea 1", status: "todo" },
    { id: 10, projectId: 5, title: "Tarea 2", status: "doing" },
    { id: 11, projectId: 6, title: "Tarea 1", status: "todo" },
    { id: 12, projectId: 6, title: "Tarea 2", status: "doing" },
];



