<script setup>
const props = defineProps({
  label: String,
})
</script>

<template>
  <div class="meeting-board-footer-item">
    <span class="meeting-board-footer-btn-icon">图标</span>
    <span class="meeting-board-footer-btn-label">{{ props.label }}</span>
  </div>
</template>

<style scoped>
.meeting-board-footer-item {
  width: 40px;
  height: 40px;
  margin: 0 5px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;
  font-size: 12px;
}

span.meeting-board-footer-btn-icon {
  display: block;
}

span.meeting-board-footer-btn-label {
  display: block;
}
</style>
