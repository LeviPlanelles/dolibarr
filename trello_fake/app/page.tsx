'use client';
import { useState } from "react";
import { mockProjects, mockTasks } from "@/lib/mock-data";
import ProjectCard from "@/components/project/ProjectCard";
import TaskCard from "@/components/task/TaskCard";

export default function Home() {

  // Estado local: id del proyecto seleccionado
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(mockProjects[0]?.id ?? null);

  // Filtramos proyectos y tareas según selección
  const selectedProject = mockProjects.find(p => p.id === selectedProjectId) ?? null;
  const tasksForProject = mockTasks.filter(t => t.projectId === selectedProjectId);

  // Agrupar tareas por columna
  const toTasks = tasksForProject.filter(t => t.status === 'todo');
  const doingTasks = tasksForProject.filter(t => t.status === 'doing');
  const doneTasks = tasksForProject.filter(t => t.status === 'done');
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h2 className="text-lg font-bold mb-4">Proyectos</h2>
        <div>
          {mockProjects.map(p => (
            <ProjectCard
              key={p.id}
              project={p}
              selected={p.id === selectedProjectId}
              onSelect={setSelectedProjectId}
            />
          ))}
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6 overflow-auto">
          <header className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">{selectedProject ? selectedProject.label : 'Selecciona un proyecto'}</h1>
              {selectedProject && <p className="text-sm text-gray-500">{selectedProject.description}</p>}
            </div>
            <div>
              <button className="bg-blue-500 text-white px-3 py-2 rounded">Nuevo</button>
            </div>
          </header>

          {/* Simple Kanban - 3 columnas */}
          <div className="grid grid-cols-3 gap-4">
            <section>
              <h3 className="font-semibold mb-3">To do</h3>
              {toTasks.length === 0 && <div className="text-sm text-gray-400">Sin tareas</div>}
              {toTasks.map(task => <TaskCard key={task.id} task={task} />)}
            </section>

            <section>
              <h3 className="font-semibold mb-3">Doing</h3>
              {doingTasks.length === 0 && <div className="text-sm text-gray-400">Sin tareas</div>}
              {doingTasks.map(task => <TaskCard key={task.id} task={task} />)}
            </section>

            <section>
              <h3 className="font-semibold mb-3">Done</h3>
              {doneTasks.length === 0 && <div className="text-sm text-gray-400">Sin tareas</div>}
              {doneTasks.map(task => <TaskCard key={task.id} task={task} />)}
            </section>            
          </div>
      </main>
    </div>    
  );
}
