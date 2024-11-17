<template>
  <video ref="videoPlayer" class="video-js"></video>
</template>

<script>
import videojs from '../3rdlibs/videojs'

export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  expose: ['setStream'],
  data() {
    return {
      player: null,
    }
  },
  methods: {
    setStream(stream) {
      if (this.player) {
        this.$refs.videoPlayer.srcObject = stream
      }
    },
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this)
    })
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  },
}
</script>
