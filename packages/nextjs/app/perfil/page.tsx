import React from 'react';
import type { NextPage } from "next";

const Perfil: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8" style={{ backgroundColor: "#F5821F" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Mi Perfil</h1>
          <p className="text-gray-600">Información personal y profesional</p>
        </div>

        {/* Main Profile Card */}
        <div className="card bg-blue-50 border-2 border-blue-200 mb-8">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                {/* Avatar */}
                <div className="avatar placeholder">
                  <div className="bg-sky-500 text-white rounded-full w-24">
                  </div>
                </div>
                
                {/* User Info */}
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-2">Juan Pérez</h2>
                  <p className="text-xl text-blue-800 mb-2">Desarrollador Full Stack</p>
                  <p className="text-gray-600">Tecnología • Colaborador desde marzo 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Certificados */}
          <div className="card bg-white shadow-md">
            <div className="card-body items-center text-center">
              <div className="bg-blue-100 p-3 rounded-lg mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-gray-800">3</p>
              <p className="text-gray-600">Certificados</p>
            </div>
          </div>

          {/* Items Asignados */}
          <div className="card bg-white shadow-md">
            <div className="card-body items-center text-center">
              <div className="bg-green-100 p-3 rounded-lg mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-gray-800">5</p>
              <p className="text-gray-600">Items Asignados</p>
            </div>
          </div>

          {/* Beneficios */}
          <div className="card bg-white shadow-md">
            <div className="card-body items-center text-center">
              <div className="bg-orange-100 p-3 rounded-lg mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-gray-800">125</p>
              <p className="text-gray-600">Beneficios ($)</p>
            </div>
          </div>

          {/* Habilidades */}
          <div className="card bg-white shadow-md">
            <div className="card-body items-center text-center">
              <div className="bg-purple-100 p-3 rounded-lg mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-4xl font-bold text-gray-800">5</p>
              <p className="text-gray-600">Habilidades</p>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Información Personal */}
          <div className="card bg-white shadow-md">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-700">Información Personal</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Nombre</p>
                  <p className="text-base font-semibold text-gray-800">Juan Pérez</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="text-base font-semibold text-gray-800">juan.perez@mamayatech.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Teléfono</p>
                  <p className="text-base font-semibold text-gray-800">+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Dirección</p>
                  <p className="text-base font-semibold text-gray-800">Av. Principal 123, Ciudad, País</p>
                </div>
              </div>
            </div>
          </div>

          {/* Información Laboral */}
          <div className="card bg-white shadow-md">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-500 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-700">Información Laboral</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Posición</p>
                  <p className="text-base font-semibold text-gray-800">Desarrollador Full Stack</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Departamento</p>
                  <p className="text-base font-semibold text-gray-800">Tecnología</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Supervisor</p>
                  <p className="text-base font-semibold text-gray-800">María González</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Fecha de Contratación</p>
                  <p className="text-base font-semibold text-gray-800">15/03/2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;