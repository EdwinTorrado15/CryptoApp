import axios from 'axios'

// Creamos una instancia de axios
export const instance = axios.create({
    baseURL: 'https://api.coinlore.net/api/'
})