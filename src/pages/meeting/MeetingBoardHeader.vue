<script setup>
import {useFullScreen} from '../../hooks/use-full-screen'
import Clock from './Clock.vue'

const {is_full_screen, handleFullScreen} = useFullScreen()
</script>

<template>
  <div class="meeting-board-header">
    <div class="meeting-board-header-aside-left">
      <div class="meeting-board-header-item">
        <span>ID：923 648 376</span>
      </div>
      <div class="meeting-board-header-item"><span>李四的会议</span></div>
      <div class="meeting-board-header-item">
        <Clock />
      </div>
      <div class="meeting-board-header-item"><span>限时</span></div>
    </div>
    <div class="meeting-board-header-aside-right">
      <div class="meeting-board-header-item">
        <span>宫格视图</span>
      </div>

      <div class="meeting-board-header-item" @click="handleFullScreen">
        <span>{{ is_full_screen ? '取消全屏' : '全屏' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.meeting-board-header {
  height: 26px;
  background-color: #999;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
}

.meeting-board-header-aside-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.meeting-board-header-aside-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.meeting-board-header-item {
  display: inline-block;
  margin: 0 5px;
}
</style>
