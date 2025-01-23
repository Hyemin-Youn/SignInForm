import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 라우터 파일 불러오기

const app = createApp(App);
app.use(router); // 라우터 등록
app.mount('#app');
