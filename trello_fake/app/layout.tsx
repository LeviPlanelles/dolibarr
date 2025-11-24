import "./globals.css";
import Sidebar from "@/components/SideBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex h-screen">
        
        {/* Sidebar fijo */}
        <Sidebar />

        {/* Zona principal */}
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>

      </body>
    </html>
  );
}