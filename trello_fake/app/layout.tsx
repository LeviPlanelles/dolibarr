import './globals.css';
import { ReactNode } from 'react';

// Tipo para el children que recibe Layout
interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es">
      <body className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Mis Proyectos</h2>
          <ul>
            <li className="py-2 px-3 rounded hover:bg-gray-200 cursor-pointer"
            //onClick={() => setSelectedProject(1)}
            >
              Proyecto A
            </li>
            
          </ul>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Navbar */}
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">TABLERO DE PROYECTOS</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Nuevo Proyecto
            </button>
          </header>

          {/* Aquí van las páginas (children) */}
          {children}
        </main>
      </body>
    </html>
  );
}
