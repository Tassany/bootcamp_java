import axios from 'axios';

const API_URL = 'http://localhost:8080'
const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
    }
}

class InvestimentoService{

    retriveAllInvestimentos(){
        return axios.get(`${API_URL}/investimentos`)
    }

    saveInvestimento(investimento){
        return axios.post(`${API_URL}/investimentos`, investimento, config)
    }
    deleteInvestimento(codigo){
        return axios.delete(`${API_URL}/investimentos/${codigo}`)
    }

}

export default new InvestimentoService();