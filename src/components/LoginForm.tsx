import React from "react";
import { login } from "../auth/auth";

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const password = (form.elements.namedItem("password") as HTMLInputElement)
    .value;

  try {
    await login({ email, password });
    window.location.href = "/dashboard"; // Redireciona para a rota protegida
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
};

function LoginHandler() {
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
        <label htmlFor="password">Senha</label>
        <input
          className="p-2 border-spacing-1 rounded-sm text-dark border "
          id="password"
          name="password"
          type="password"
        />
      </div>
      <button className="transition-all hover:scale-105 duration-150 ease-in-out delay-100 px-4 py-2 rounded-sm bg-primary dark:bg-primaryDark hover:bg-secondary text-light">
        Login
      </button>
    </form>
  );
}

export default LoginHandler;
