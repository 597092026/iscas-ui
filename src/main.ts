import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "../node_modules/iscas-ui/style.css"; //引入组件样式
import IscasUI from "iscas-ui"; //导入

createApp(App).use(IscasUI).mount('#app')
