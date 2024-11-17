<script setup>
import {ref, reactive, useTemplateRef} from 'vue'
import {useRouter} from 'vue-router'

import MeetingBoardHeader from './meeting/MeetingBoardHeader.vue'
import MeetingBoardBody from './meeting/MeetingBoardBody.vue'
import MeetingBoardFooter from './meeting/MeetingBoardFooter.vue'

import {getMedia, getDisplayMedia} from '../utils/media-devices'

import VideoPlayer from '../utils/VideoPlayer.vue'

const router = useRouter()

const chat_on = ref(false)

const container_klass = reactive({'meeting-dynamic-layout': chat_on})

const videoRef = useTemplateRef('vdo')

/**
 * https://videojs.com/guides/options/
 */
const videoOptions = {
  width: 360,
  height: 240,
  autoplay: false,
  controls: false,
}

/**
 * 开启视频触发的方法
 */
const handleVideo = () => {
  getMedia()
    .then(stream => {
      videoRef.value.setStream(stream)
    })
    .catch(err => {
      // 出错了
      console.log(err, '啥玩意儿啊')
    })
}

/**
 * 共享屏幕时触发的方法
 */
const handleShare = async () => {
  const capture = await getDisplayMedia()

  videoRef.value.setStream(capture)
}

/**
 * 点击 聊天 按钮时触发的方法
 * @param {Boolean} value
 */
const handleChat = value => {
  chat_on.value = value
}

/**
 * 离开会议
 */
const handleLeave = () => {
  // TODO: 添加二次确认
  router.replace('/home')
}
</script>

<template>
  <div class="meeting" :class="container_klass">
    <div class="meeting-board">
      <MeetingBoardHeader />

      <MeetingBoardBody />

      <MeetingBoardFooter
        @leave="handleLeave"
        @chat="handleChat"
        @video="handleVideo"
        @share="handleShare"
        :chat_on="chat_on" />
    </div>

    <div class="meeting-aside-right" v-if="chat_on">
      <VideoPlayer ref="vdo" :options="videoOptions" key="1" />
    </div>
  </div>
</template>

<style scoped>
.meeting {
  height: 100vh;
  width: 100vw;
  display: grid;
  overflow: hidden;

  user-select: none;
}
.meeting-dynamic-layout {
  grid-template-columns: 8fr 2fr;
}

.meeting-board {
  display: flex;
  flex-direction: column;
}

.meeting-aside-right {
  background-color: #ccc;
}
</style>
