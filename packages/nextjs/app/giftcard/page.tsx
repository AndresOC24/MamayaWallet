"use client";

import type { NextPage } from "next";

const GiftCard: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8" style={{ backgroundColor: "#F5821F" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-2">
            MamayaWallet
          </h1>
          <p className="text-lg text-base-content/70">
            Espacio para Gift Cards y Beneficios asignados
          </p>
        </div>

        {/* Resumen de Beneficios */}
        <div className="card bg-success/10 border-2 border-success shadow-xl mb-8">
          <div className="card-body">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="card-title text-2xl md:text-3xl text-success mb-2">
                  Resumen de Beneficios
                </h2>
                <p className="text-base-content/70">3 beneficios activos</p>
              </div>
              <div className="text-right">
                <div className="text-5xl md:text-6xl font-bold text-success">
                  $270
                </div>
                <p className="text-sm text-base-content/70 mt-1">
                  Valor total disponible
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gift Cards Activas */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-base-content mb-4">
            Gift Cards Activas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gift Card 1 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-4 pt-4">
                <img
                  src="/img/giftcard.png"
                  alt="Gift Card"
                  className="rounded-xl w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Negocio A</h3>
                <p className="text-base-content/70">
                  Válida hasta: 31/12/2024
                </p>
                <div className="badge badge-success gap-2 py-3">
                  <span className="font-bold">$100</span>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">Ver detalles</button>
                </div>
              </div>
            </div>

            {/* Gift Card 2 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-4 pt-4">
                <img
                  src="/img/giftcard.png"
                  alt="Gift Card"
                  className="rounded-xl w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Negocio B</h3>
                <p className="text-base-content/70">
                  Válida hasta: 15/01/2025
                </p>
                <div className="badge badge-success gap-2 py-3">
                  <span className="font-bold">$150</span>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">Ver detalles</button>
                </div>
              </div>
            </div>

            {/* Gift Card 3 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="px-4 pt-4">
                <img
                  src="/img/giftcard.png"
                  alt="Gift Card"
                  className="rounded-xl w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Negocio C</h3>
                <p className="text-base-content/70">
                  Válida hasta: 28/02/2025
                </p>
                <div className="badge badge-success gap-2 py-3">
                  <span className="font-bold">$20</span>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">Ver detalles</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios Adicionales */}
        <div>
          <h2 className="text-2xl font-bold text-base-content mb-4">
            Beneficios Adicionales
          </h2>
          <div className="space-y-4">
            {/* Beneficio 1 */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="badge badge-primary badge-lg">10%</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">Descuento en Restaurante X</h3>
                    <p className="text-base-content/70 text-sm">
                      Válido de lunes a viernes
                    </p>
                  </div>
                  <button className="btn btn-outline btn-sm">Usar</button>
                </div>
              </div>
            </div>

            {/* Beneficio 2 */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="badge badge-secondary badge-lg">2x1</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">Cine Premium</h3>
                    <p className="text-base-content/70 text-sm">
                      Todos los martes
                    </p>
                  </div>
                  <button className="btn btn-outline btn-sm">Usar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;