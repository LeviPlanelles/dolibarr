"use client";

import { useState } from "react";
import { mockProjects } from "@/lib/mock-data";

export default function Sidebar() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <aside className="w-64 bg-white border-r border-gray-300 p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-6">Proyectos</h2>

      <ul className="flex-1 space-y-2">
        {mockProjects.map((project) => (
          <li
            key={project.id}
            onClick={() => setSelected(project.id)}
            className={`cursor-pointer p-2 rounded-md ${
              selected === project.id
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {project.label}
          </li>
        ))}
      </ul>

      <button className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        + Nuevo proyecto
      </button>
    </aside>
  );
}
