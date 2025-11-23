'use client';
import type { Task } from "@/types/task";
import Card from "../ui/Card";

interface Props {
    task: Task;
    onClick?: (taskId: number) => void; 
}

export default function TaskCard({ task, onClick }: Props) {
    return (
        <Card className="mb-3">
            <div className="flex justify-between items-start">
                <div>
                    <div className="font-medium">{task.title}</div>
                    {task.assignee && <div className="text-xs text-gray-500">Asig: {task.assignee}</div>}
                </div>
            </div>
        </Card>
    )
}