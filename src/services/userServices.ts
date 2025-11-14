import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL;

//Cria usuário(cadastro)
export async function registerUser({ name, email, password }: { name: string, email: string, password: string }) {
  try {
    const response = await axios.post(`${API_URL}/api/users`, { name, email, password });
    return response.data;

  } catch (error) {
    throw new Error("Erro ao registrar usuário");
  }
}

export async function loginUser({ email, password }: { email: string, password: string }) {
  try {
    const response = await axios.post(`${API_URL}/api/users/login`, { email, password });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Erro ao fazer login");
  }
}

// Buscar todos os usuários

export async function getUsers() {
  try {
    const response = await axios.get(`${API_URL}/api/users`);
    return response.data;

  } catch {
    throw new Error("Erro ao buscar usuários");
  }
}


// Buscar usuário por ID
export async function getUserById(id: number) {
  try {
    const response = await axios.get(`${API_URL}/api/users${id}`);
    return response.data;
  } catch {
    throw new Error("Erro ao buscar usuário por ID");
  }
}

// Atualizar usuário por ID

export async function updateUser(id: number, data: { name?: string, email?: string, password?: string }) {
  try {
    const response = await axios.put(`${API_URL}/api/users/${id}`, data);
    return response.data;
  } catch {
    throw new Error("Erro ao atualizar usuário");
  }
}

// Deletar usuário por ID

export async function deleteUser(id: number) {
  try {
    await axios.delete(`${API_URL}/api/users/${id}`)
  } catch {
    throw new Error("Erro ao deletar usuário");
  }
}


