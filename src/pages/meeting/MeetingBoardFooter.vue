<script setup>
import BtnFooterItem from './BtnFooterItem.vue'

const props = defineProps({
  chat_on: Boolean,
})

const emit = defineEmits(['chat', 'leave', 'video', 'share'])

const handleVideo = () => {
  emit('video')
}

const handleShare = () => {
  emit('share')
}

/**
 * 聊天
 */
const handleChat = () => {
  emit('chat', !props.chat_on)
}

/**
 * 点击离开按钮
 */
const handleLeave = () => {
  emit('leave')
}
</script>

<template>
  <div class="meeting-board-footer">
    <div class="meeting-board-footer-aside-left">
      <BtnFooterItem label="音频" />
      <BtnFooterItem label="扬声器" />
      <BtnFooterItem label="视频" @click="handleVideo" />
    </div>

    <div class="meeting-board-footer-middle">
      <BtnFooterItem label="安全" />
      <BtnFooterItem label="邀请" />
      <BtnFooterItem label="参会者" />
      <BtnFooterItem label="共享" @click="handleShare" />
      <BtnFooterItem label="聊天" @click="handleChat" />
      <BtnFooterItem label="录制" />
    </div>

    <div class="meeting-board-footer-aside-right">
      <BtnFooterItem label="离开" @click="handleLeave" />
    </div>
  </div>
</template>

<style scoped>
.meeting-board-footer {
  height: 50px;
  background-color: #999;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
}

.meeting-board-footer-aside-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
}
.meeting-board-footer-middle {
  display: flex;
  justify-content: center;
  align-items: center;
}
.meeting-board-footer-aside-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
}
</style>
