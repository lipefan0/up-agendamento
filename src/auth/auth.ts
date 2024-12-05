// auth.ts

interface LoginParams {
  email: string;
  password: string;
}

interface RegisterParams {
  email: string;
  password: string;
  name: string;
  businessType: string;
  address: string;
}

interface User {
  email: string;
  businessId: string;
  business: {
    id: string;
    name: string;
    type: string;
    address: string;
  };
}

export const login = async ({ email, password }: LoginParams) => {
  // Simula uma chamada à API de login
  const response = await fetch(
    "https://dp7yszchnf.execute-api.us-east-2.amazonaws.com/dev/singin",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    throw new Error("Login falhou");
  }

  const data = (await response.json()) as { token: string; user: User };

  // Armazenando no sessionStorage
  sessionStorage.setItem("token", data.token);
  sessionStorage.setItem("user", JSON.stringify(data.user));

  return data;
};

export const logout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  window.location.href = "/login"; // Redireciona para a página de login
};

export const isAuthenticated = () => {
  return sessionStorage.getItem("token") !== null;
};

export const register = async ({
  email,
  password,
  name,
  businessType,
  address,
}: RegisterParams) => {
  // Simula uma chamada à API de registro
  const response = await fetch(
    "https://dp7yszchnf.execute-api.us-east-2.amazonaws.com/dev/singup",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name, businessType, address }),
    }
  );

  if (!response.ok) {
    throw new Error("Registro falhou");
  }

  return response.json();
};
