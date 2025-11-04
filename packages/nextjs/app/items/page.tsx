"use client";

import type { NextPage } from "next";
import { useState } from "react";

type Item = {
  id: number;
  name: string;
  serial: string;
  status: "Activo" | "Pendiente" | "Mantenimiento";
  condition: "Excelente" | "Bueno" | "Nuevo";
  assignedDate: string;
  tokenized: boolean;
  imageUrl: string;
  icon: string;
};

const ItemsAsignados: NextPage = () => {
  const items: Item[] = [
    {
      id: 1,
      name: "Laptop Dell XPS 13",
      serial: "DLXPS13-2024-001",
      status: "Activo",
      condition: "Excelente",
      assignedDate: "15/09/2024",
      tokenized: true,
      imageUrl: "/img/laptop_sin_fondo.png",
      icon: "💻",
    },
    {
      id: 2,
      name: "Mouse Logitech MX Master 3",
      serial: "LOG-MX3-2024-002",
      status: "Activo",
      condition: "Bueno",
      assignedDate: "20/10/2024",
      tokenized: true,
      imageUrl: "/img/mouse.png",
      icon: "🖱️",
    },
    {
      id: 3,
      name: "Teclado Mecánico Razer BlackWidow",
      serial: "RZ-BW-2024-003",
      status: "Pendiente",
      condition: "Nuevo",
      assignedDate: "05/11/2024",
      tokenized: true,
      imageUrl: "/img/teclado.png",
      icon: "⌨️",
    },
    {
      id: 4,
      name: "Audífonos Sony WH-1000XM4",
      serial: "SNY-WH4-2024-004",
      status: "Activo",
      condition: "Excelente",
      assignedDate: "10/08/2024",
      tokenized: true,
      imageUrl: "/img/audifonos.png",
      icon: "🎧",
    },
    {
      id: 5,
      name: "Monitor Dell UltraSharp 27\"",
      serial: "DL-US27-2024-005",
      status: "Mantenimiento",
      condition: "Bueno",
      assignedDate: "01/07/2024",
      tokenized: true,
      imageUrl: "/img/monitor.png",
      icon: "🖥️",
    },
    {
      id: 6,
      name: "Webcam Logitech C920",
      serial: "LOG-C920-2024-006",
      status: "Activo",
      condition: "Bueno",
      assignedDate: "12/09/2024",
      tokenized: true,
      imageUrl: "/img/webcamp.png",
      icon: "📹",
    },
  ];

  const [activeFilter, setActiveFilter] = useState<"Todos" | "Activos" | "Pendientes" | "Mantenimiento">("Todos");

  const filters: { name: "Todos" | "Activos" | "Pendientes" | "Mantenimiento"; count: number }[] = [
    { name: "Todos", count: 6 },
    { name: "Activos", count: 4 },
    { name: "Pendientes", count: 1 },
    { name: "Mantenimiento", count: 1 },
  ];

  const getStatusColor = (status: Item["status"]) => {
    switch (status) {
      case "Activo":
        return "badge-success";
      case "Pendiente":
        return "badge-warning";
      case "Mantenimiento":
        return "badge-error";
      default:
        return "badge-neutral";
    }
  };

  const getConditionColor = (condition: Item["condition"]) => {
    switch (condition) {
      case "Excelente":
        return "badge-success";
      case "Bueno":
        return "badge-info";
      case "Nuevo":
        return "badge-primary";
      default:
        return "badge-neutral";
    }
  };

  const filteredItems = items.filter(item => {
    if (activeFilter === "Todos") return true;
    // "Activos" → "Activo"
    return item.status === activeFilter.replace("s", "") as Item["status"];
  });

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: "#F5821F" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Ítems Asignados</h1>
          <p className="text-lg text-white/80">Registro de equipos y materiales asignados a tu persona</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map(filter => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`btn ${
                activeFilter === filter.name ? "btn-neutral" : "btn-ghost bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {filter.name} ({filter.count})
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <figure className="px-4 pt-4 bg-base-200 h-48">
                <div className="w-full h-full flex items-center justify-center rounded-xl overflow-hidden bg-white/50">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-contain"
                    onError={e => {
                      // Fallback a ícono si falla la imagen
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-6xl">${item.icon}</span>`;
                    }}
                  />
                </div>
              </figure>

              <div className="card-body p-4">
                {/* Item Name */}
                <h3 className="card-title text-base font-bold line-clamp-2">{item.name}</h3>

                {/* Serial Number */}
                <p className="text-sm text-base-content/60">S/N: {item.serial}</p>

                {/* Status Badges */}
                <div className="flex gap-2 my-2">
                  <div className={`badge ${getStatusColor(item.status)} gap-1`}>
                    {item.status === "Activo" && "✓"}
                    {item.status === "Pendiente" && "⏱"}
                    {item.status === "Mantenimiento" && "🔧"}
                    {item.status}
                  </div>
                  <div className={`badge ${getConditionColor(item.condition)}`}>{item.condition}</div>
                </div>

                {/* Assignment Date */}
                <p className="text-sm text-base-content/70">Asignado: {item.assignedDate}</p>

                {/* Tokenized Status */}
                {item.tokenized && (
                  <div className="flex items-center gap-2 text-sm text-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Tokenizado
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-white mb-2">No hay ítems en esta categoría</h3>
            <p className="text-white/70">Intenta con otro filtro para ver más resultados</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsAsignados;
