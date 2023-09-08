import axios from "axios";

// export const vercelClient=axios.create({baseURL:process.env.NODE_ENV==="development"?"http://localhost:3000":"http://localhost:3000",
// headers:{"content-type": "application/json"}
// })
export const vercelClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://online-shop-henna.vercel.app",
  headers: { "content-type": "application/json" },
});

export const raminBaseUrl = axios.create({
  baseURL: "http://ramin021.pythonanywhere.com/",
  headers: {
    "content-type": "application/json",
  },
});

raminBaseUrl.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      let refreshToken = localStorage.getItem("refreshToken");
      let accessToken = localStorage.getItem("accessToken");
      // if (refreshToken) {
      //   originalRequest.headers["Authorization"] = `JWT ${refreshToken}`;
      // }
      try {
        const { data } = await axios.post("/auth/jwt/refresh/", {
          refresh: refreshToken,
        });

        console.log("this is new tokens", data);
        // Update access token and refresh token
        accessToken = data.accessToken;
        refreshToken = data.refreshToken;

        // Update headers of the original request with new access token
        originalRequest.headers.Authorization = `JWT ${accessToken}`;

        // Retry the original request
        return axiosInstance(originalRequest);
      } catch (err) {
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessToken");
        // Handle refresh token error
        console.error(err);
      }
    }

    return Promise.reject(error);
  }
);
