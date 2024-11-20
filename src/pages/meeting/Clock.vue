<script setup>
import {ref, computed, onMounted, onBeforeUnmount} from 'vue'

const hour = ref(0)
const minute = ref(0)
const second = ref(0)

/**
 * 将一个数字补全为两位数字符串
 * 如果数值小于10，则在前补0
 * @param {number} val - 数字值
 */
const completePrefix = val => {
  if (val < 10) {
    return '0' + val
  } else {
    return val + ''
  }
}

const clock_value = computed(() => {
  const h = completePrefix(hour.value)
  const m = completePrefix(minute.value)
  const s = completePrefix(second.value)

  return `${h}:${m}:${s}`
})

let timer = null

onMounted(() => {
  timer = setInterval(() => {
    let next_second = second.value + 1

    if (next_second >= 60) {
      const next_minute = minute.value + 1

      if (next_minute >= 60) {
        const next_hour = hour.value + 1

        if (next_hour >= 24) {
          alert('会议时长严重超时')
          clearInterval(timer)
        } else {
          hour.value = next_hour
        }

        minute.value = 0
      } else {
        minute.value = next_minute
      }

      second.value = 0
    } else {
      second.value = next_second
    }
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<template>
  <span>{{ clock_value }}</span>
</template>

<style scoped></style>
