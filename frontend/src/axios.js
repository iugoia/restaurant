import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000';

export default axios;

// export default {
//     created() {
//         axios.get('/sanctum/csrf-cookie')
//             .then(() => {
//                 const csrfToken = Cookies.get('XSRF-TOKEN');
//             })
//             .catch(error => {
//                 console.log("Ошибка при получении csrf-токена", error);
//             })
//     }
// };
