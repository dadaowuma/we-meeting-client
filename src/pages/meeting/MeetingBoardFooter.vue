<script setup>
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
      <div class="meeting-board-footer-item">
        <span>音频</span>
      </div>

      <div class="meeting-board-footer-item">
        <span>扬声器</span>
      </div>

      <div class="meeting-board-footer-item" @click="handleVideo">
        <span>视频</span>
      </div>
    </div>

    <div class="meeting-board-footer-middle">
      <div class="meeting-board-footer-item">
        <span>安全</span>
      </div>

      <div class="meeting-board-footer-item">
        <span>邀请</span>
      </div>

      <div class="meeting-board-footer-item">
        <span>参会者</span>
      </div>

      <div class="meeting-board-footer-item" @click="handleShare">
        <span>共享</span>
      </div>

      <div class="meeting-board-footer-item" @click="handleChat">
        <span>聊天</span>
      </div>

      <div class="meeting-board-footer-item">
        <span>录制</span>
      </div>
    </div>

    <div class="meeting-board-footer-aside-right">
      <div class="meeting-board-footer-item" @click="handleLeave">
        <span>离开</span>
      </div>
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

.meeting-board-footer-item {
  /* display: inline-block; */
  width: 40px;
  height: 40px;
  margin: 0 5px;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
