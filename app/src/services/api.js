import axios from "axios";


const api = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {
        'Content-Type': 'application/json'
    }
})


api.interceptors.request.use((config)=>{
    const token = undefined

    if (token) {
        config.headers.Authorization = token
        
    }
    return config
},
(err)=>{
    return Promise.reject(err)
});


export const prdctservices = {
    prdct : async ()=>{
        const res = await api.get('products')
        return res.data
    },
    prdctdetails : async (id)=>{
        const res = await api.get(`products/${id}`)
        return res.data
    },

}