"use client";

import type { NextPage } from "next";

const Certificados: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8" style={{ backgroundColor: "#F5821F" }}>
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-2">
            Certificados
          </h1>
          <p className="text-lg text-base-content/70">
            Aquí podrás visualizar tus certificados asignados y certificaciones tokenizadas
          </p>
        </div>
        {/* Tarjetas de Certificados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Certificado de Participación */}
          <div className="card bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">MT</span>
                  </div>
                  <span className="text-sm font-medium text-teal-800">Mamaya Tech</span>
                </div>
                <div className="flex gap-1">
                  {/* Icono Ver (Ojo) */}
                  <button className="btn btn-ghost btn-xs p-1">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                  {/* Icono Descargar */}
                  <button className="btn btn-ghost btn-xs p-1">
                    <svg
                      className="w-4 h-4 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-bold text-teal-900 mb-2">
                Certificado de Participación
              </h3>
              <p className="text-2xl font-bold text-teal-800 mb-3">Juan Pérez</p>
              <p className="text-sm text-teal-700 mb-4">
                Por haber completado con éxito el curso de Marketing Digital Avanzado de 40 horas.
              </p>

              <div className="space-y-2 text-sm">
                <div className="badge badge-outline badge-sm text-teal-700 border-teal-400">
                  Curso: Marketing Digital Avanzado
                </div>
                <div className="badge badge-outline badge-sm text-teal-700 border-teal-400">
                  Horas: 40 horas
                </div>
                <div className="badge badge-outline badge-sm text-teal-700 border-teal-400">
                  Fecha: 15/11/2024
                </div>
                <div className="badge badge-outline badge-sm text-teal-700 border-teal-400">
                  ID: CERT001
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-teal-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Verificado en Blockchain</span>
                <span className="font-mono text-[10px] text-teal-500">Hash: 0x12345678...</span>
              </div>
            </div>
          </div>

          {/* Certificado de Reconocimiento */}
          <div className="card bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">MT</span>
                  </div>
                  <span className="text-sm font-medium text-orange-800">Mamaya Tech</span>
                </div>
                <div className="flex gap-1">
                  <button className="btn btn-ghost btn-xs p-1">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                  <button className="btn btn-ghost btn-xs p-1">
                    <svg
                      className="w-4 h-4 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-bold text-orange-900 mb-2">
                Certificado de Reconocimiento
              </h3>
              <p className="text-2xl font-bold text-orange-800 mb-3">María González</p>
              <p className="text-sm text-orange-700 mb-4">
                Agradecemos su diligencia, participación y contribuciones a nuestra comunidad de aprendizaje.
              </p>

              <div className="space-y-2 text-sm">
                <div className="badge badge-outline badge-sm text-orange-700 border-orange-400">
                  Curso: Escuela de Diseño Gráfico 212 Pixeles
                </div>
                <div className="badge badge-outline badge-sm text-orange-700 border-orange-400">
                  Horas: 60 horas
                </div>
                <div className="badge badge-outline badge-sm text-orange-700 border-orange-400">
                  Fecha: 20/12/2024
                </div>
                <div className="badge badge-outline badge-sm text-orange-700 border-orange-400">
                  ID: CERT002
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-orange-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Verificado en Blockchain</span>
                <span className="font-mono text-[10px] text-orange-500">Hash: 0xabcdef12...</span>
              </div>
            </div>
          </div>

          {/* Certificado de Capacitación */}
          <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body p-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">MT</span>
                  </div>
                  <span className="text-sm font-medium text-blue-800">Mamaya Tech</span>
                </div>
                <div className="flex gap-1">
                  <button className="btn btn-ghost btn-xs p-1">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                  <button className="btn btn-ghost btn-xs p-1">
                    <svg
                      className="w-4 h-4 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Certificado de Capacitación
              </h3>
              <p className="text-2xl font-bold text-blue-800 mb-3">Carlos Rodríguez</p>
              <p className="text-sm text-blue-700 mb-4">
                Por completar exitosamente el curso de Blockchain y Criptomonedas.
              </p>

              <div className="space-y-2 text-sm">
                <div className="badge badge-outline badge-sm text-blue-700 border-blue-400">
                  Curso: Blockchain y Criptomonedas
                </div>
                <div className="badge badge-outline badge-sm text-blue-700 border-blue-400">
                  Horas: 30 horas
                </div>
                <div className="badge badge-outline badge-sm text-blue-700 border-blue-400">
                  Fecha: 25/12/2024
                </div>
                <div className="badge badge-outline badge-sm text-blue-700 border-blue-400">
                  ID: CERT003
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-blue-600">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Verificado en Blockchain</span>
                <span className="font-mono text-[10px] text-blue-500">Hash: 0x98765432...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificados;