import axios from 'axios';


// Central axios instance for all DevPulse API calls
const api = axios.create({
    baseURL : 'http://localhost:8000/api',
    header : {
        'Content-Type' : 'application/json'
    }
});

// REQUEST INTERCEPTOR
// Attaches the saved JWT access token to every outgoing request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR
// If the backend returns 401 (unauthorized/expired token),
// clear stored auth data and send the user to the login page
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response && error.response.status === 401){
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
)

export default api;