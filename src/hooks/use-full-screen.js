import {ref} from 'vue'

import screenfull from '../3rdlibs/screen-full';

/**
 * 全屏切换
 * 可以通过此方法，进行全屏的切换
 */
export const toggleFullScreen = () => {
  if (screenfull.isEnabled) {
    if(screenfull.isFullscreen){
      screenfull.exit();
    }else{
      screenfull.request();
    }
	}
}

/**
 * 当前是否是全屏
 * @returns {Boolean}
 */
export const isFullScreen = () => {
  return screenfull.isFullscreen;
}

/**
 * 定义全屏相关hooks
 * 返回当前全屏状态和切换全屏的方法
 * 在组件中可以通过此hook切换全屏和获取当前全屏的状态值
 * @returns 
 */
export const useFullScreen = () => {
  const is_full_screen = ref(isFullScreen())

  const handleFullScreen = () => {
    toggleFullScreen()

    setTimeout(() => {
      /**
       * 获取当前屏幕状态
       * 该值更新不及时，使用promise或者定时器都无法及时获取到准确的值
       * 此处使用50毫秒定时来处理此操作
       */
      const cur_status = isFullScreen()

      is_full_screen.value = cur_status
    }, 50)
  }

  return {
    is_full_screen,
    handleFullScreen
  }
}
