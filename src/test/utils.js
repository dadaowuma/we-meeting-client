import { createApp } from 'vue'
import { createPinia } from 'pinia'

import TestApp from './TestApp.vue'

/**
 * 创建vue APP
 * @returns 
 */
export const createVueApp = () => {
  // 创建vue APP，并将vue挂载到app节点
  return createApp(TestApp)
}

/**
 * 创建一个vue app挂载点
 * @returns 
 */
export const createMountPoint = () => {
  const div = window.document.createElement('div');
  return div;
}

/**
 * 测试pinia store中数据时，需要先执行此方法
 * @returns 
 */
export const preparePinia = () => {
  const app = createVueApp();
  const pinia = createPinia()
  const div = createMountPoint();

  app.use(pinia);
  app.mount(div);

  return app;
}