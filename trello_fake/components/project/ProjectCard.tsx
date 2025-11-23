'use client';
import type { Project } from "@/types/project";

interface Props {
    project: Project;
    selected?: boolean;
    onSelect?: (id: number) => void;
}

export default function ProjectCard({ project, selected=false, onSelect }:Props) {
    return (
        <div 
            onClick={() => onSelect?.(project.id)}
            className={`cursor-pointer p-2 rounded-md mb-2 ${selected ? 'bg-blue-50 border-l-4 border-blue-500' : 'hover:bg-gray-100'}`}
        >
            <div className="font-semibold">{project.label}</div>
            {project.description && <div className="text-xs text-gray-500">{project.description}</div>}
        </div>
    )
}