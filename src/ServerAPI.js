import Axios from "axios";

const API_ENDPOINT = 'http://localhost:5000'

const ServerAPI = {
    getProduct() {
        return new Promise((resolve, reject) => {
            Axios.get(`${API_ENDPOINT}/product`)
                .then(res => (resolve(res.data)))
                .catch(error => (reject(error.response.data)))
        })
    },

    getOneProduct(id) {
        return new Promise((resolve, reject) => {
            Axios.get(`${API_ENDPOINT}/product/${id}`)
                .then(res => (resolve(res.data)))
                .catch(error => (reject(error.response.data)))
        })
    },

    updateProduct(name, price, id) {
        return new Promise((resolve, reject) => {
            Axios.put(`${API_ENDPOINT}/product/${id}`, {
                name,
                price,
            })
                .then(res => (resolve(res.data)))
                .catch(error => (reject(error.response.data)))
        })
    },

    deleteProduct(id) {
        return new Promise((resolve, reject) => {
            Axios.delete(`${API_ENDPOINT}/product/${id}`)
                .then(res => (resolve(res.data)))
                .catch(error => (reject(error.response.data)))
        })
    },

    createProduct(name, price) {
        return new Promise((resolve, reject) => {
            Axios.post(`${API_ENDPOINT}/product/`, {
                name, price
            })
                .then(res => (resolve(res.data)))
                .catch(error => (reject(error.response.data)))
        })
    },
}

export default ServerAPI;