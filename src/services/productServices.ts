import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Buscar todos os produtos

export async function getProduct() {
  try {
    const response = await axios.get(`${API_URL}/api/products`)
    response.data;

  } catch {
    throw new Error("Erro ao buscar produtos");
  }
}

// Buscar produto por ID
export async function getProductById(id: number) {
  try {
    const response = await axios.get(`${API_URL}/api/products/${id}`);
    return response.data;
  } catch {
    throw new Error("Erro ao buscar produto por ID");
  }
}

//criar Produto

export async function createProduct(data: { name: string; escription: string; price: number; stock: number }) {
  try {
    const response = await axios.post(`${API_URL}/api/products`, data);
    return response.data;
  } catch {
    throw new Error("Erro ao criar produto");
  }
}

// Atualizar Produto

export async function updateProduct(
  id: number,
  data: { name?: string; description?: string; price?: number; stock?: number }
) {
  try {
    const response = await axios.put(`${API_URL}/api/products/${id}`, data);
    return response.data;
  } catch {
    throw new Error("Erro ao atualizar produto")
  }
}

// Deletar Produto

export async function deleteProduct(id: number) {
  try {
    await axios.delete(`${API_URL}/api/products/${id}`,);
    return true;
  } catch {
    throw new Error("Erro ao deletar produto");
  }
}