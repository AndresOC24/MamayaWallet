"use client";

import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div
        className="min-h-screen flex flex-col justify-start items-center pt-24 md:pt-32"
        style={{ backgroundColor: "#F5821F" }}
      >
        <figure className="pb-6">
          <img
            width="500"
            height="75"
            src="/img/mamayaWallet-sin_fondo.png"
            alt="Logo"
            className="rounded-xl"
          />
        </figure>

        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Bienvenido
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/giftcard">
              <button className="btn btn-outline btn-primary btn-lg text-lg font-semibold">
                Gift Card
              </button>
            </Link>
            <Link href="/certificados">
            <button className="btn btn-outline btn-secondary btn-lg text-lg font-semibold">
              Certificados
            </button>
            </Link>
            <Link href="/items">
            <button className="btn btn-outline btn-accent btn-lg text-lg font-semibold">
              Items
            </button>
            </Link>
          </div>

          {/* Tarjeta con fondo blanco y sin fondo en el saldo */}
          <div className="mt-10 w-96">
            <div
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
              style={{ border: "1px solid #e5e7eb" }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Juan Perez
              </h2>
              <p className="text-gray-600 mb-4">Saldo en Tokens:</p>

              {/* Saldo sin fondo de botón */}
              <div className="inline-block bg-gray-900 text-white rounded-full px-8 py-4">
                <span className="text-5xl font-bold">1000</span>
                <span className="text-5xl font-bold text-orange-500 ml-2">
                  {" "}MMT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;