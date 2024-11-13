import { createApp } from 'vue'
// 引入自定义组件
import App from './App.vue'

import router from './router'
import pinia from './store/index'

// 创建vue APP，并将vue挂载到app节点
createApp(App).use(pinia).use(router).mount('#app')