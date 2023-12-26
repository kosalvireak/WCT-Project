import { createApp } from 'vue'
import './style.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import 'mdb-vue-ui-kit/js/mdb.es.min.js';
import App from './App.vue'
import router from './router/index';


const app = createApp(App)

app.use(router);

app.mount("#app");