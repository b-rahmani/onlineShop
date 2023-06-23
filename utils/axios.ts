import axios from "axios";


// export const vercelClient=axios.create({baseURL:process.env.NODE_ENV==="development"?"http://localhost:3000":"http://localhost:3000",
// headers:{"content-type": "application/json"}
// })
export const vercelClient=axios.create({baseURL:process.env.NODE_ENV==="development"?"http://localhost:3000":"https://online-shop-henna.vercel.app",
headers:{"content-type": "application/json"}
})


export const  raminBaseUrl=axios.create({baseURL:"http://ramin021.pythonanywhere.com/",
headers:{"content-type": "application/json"}
})