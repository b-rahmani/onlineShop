import axios from "axios";


export const vercelClient=axios.create({baseURL:process.env.NODE_ENV==="development"?"http://localhost:3000":"https://online-shop-henna.vercel.app",
headers:{"content-type": "application/json"}
})