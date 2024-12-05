import React from "react";
import { register } from "../auth/auth";

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const password = (form.elements.namedItem("password") as HTMLInputElement)
    .value;
  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const businessType = (
    form.elements.namedItem("businessType") as HTMLInputElement
  ).value;
  const address = (form.elements.namedItem("address") as HTMLInputElement)
    .value;

  try {
    await register({ name, email, password, businessType, address });
    window.location.href = "/login"; // Redireciona para a rota protegida
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
};

function RegisterHandler() {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[320px]">
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          className="p-2 border-spacing-1 rounded-sm text-dark border"
          id="email"
          name="email"
          type="email"
          placeholder=""
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="name">Nome da empresa</label>
        <input
          className="p-2 border-spacing-1 rounded-sm text-dark border"
          id="name"
          name="name"
          type="text"
          placeholder=""
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="businessType">Tipo da empresa</label>
        <input
          className="p-2 border-spacing-1 rounded-sm text-dark border"
          id="businessType"
          name="businessType"
          type="text"
          placeholder=""
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="address">Endereço</label>
        <input
          className="p-2 border-spacing-1 rounded-sm text-dark border"
          id="address"
          name="address"
          type="text"
          placeholder=""
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password">Senha</label>
        <input
          className="p-2 border-spacing-1 rounded-sm text-dark border "
          id="password"
          name="password"
          type="password"
        />
      </div>
      <button className="transition-all hover:scale-95 duration-300 ease-in-out delay-100 px-4 py-2 rounded-sm bg-primary dark:bg-primaryDark hover:bg-secondary text-light">
        Registrar
      </button>
    </form>
  );
}

export default RegisterHandler;
