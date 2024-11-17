<script setup>
import VideoPlayer from '../../utils/VideoPlayer.vue'

/**
 * https://videojs.com/guides/options/
 */
const videoOptions = {
  width: 360,
  height: 240,
  autoplay: false,
  controls: false,
  sources: [
    {
      src: 'http://localhost:3000/upload/test.mp4',
      type: 'video/mp4',
    },
  ],
}
</script>

<template>
  <div class="meeting-board-body">
    <div>
      <VideoPlayer :options="videoOptions" key="1" />
      <VideoPlayer :options="videoOptions" key="2" />
    </div>
  </div>
</template>

<style scoped>
.meeting-board-body {
  flex-grow: 1;
}
</style>
