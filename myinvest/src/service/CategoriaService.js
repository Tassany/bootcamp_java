import axios from 'axios';

const API_URL = 'http://localhost:8080'

class CategoriaService{
    retriveAllCategorias(){
        return axios.get(`${API_URL}/categorias`)
    }
    saveCategoria(categorias){
        return axios.post(`${API_URL}/categorias`, categorias)
    }
    deleteCategoria(codigo){
        return axios.delete(`${API_URL}/categorias/${codigo}`)
    }
}
export default new CategoriaService();