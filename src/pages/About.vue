<script setup>
import {ref, onMounted} from 'vue'
import {useCounter1Store, useCounter2Store} from '../store/count-store'
import cookie from '../3rdlibs/cookie'

const count = ref(0)
const store1 = useCounter1Store()
const store2 = useCounter2Store()

const updateStore1 = () => {
  store1.increment()
}

const updateStore2 = () => {
  store2.increment()
}

onMounted(() => {
  cookie.set('myname', 'wemeeting')
})
</script>

<template>
  <div class="about">
    <router-link to="/">返回首页</router-link>

    <span>关于我们，第{{ count }}次提交。</span>

    <div>
      <span>store1::{{ store1.count }}-{{ store1.name }}</span>
      <span @click="updateStore1">点击增加</span>
    </div>

    <div>
      <span>store2::{{ store2.count }}-{{ store2.doubleCount }}</span>
      <span @click="updateStore2">点击增加</span>
    </div>
  </div>
</template>

<style scoped>
.about {
  font-weight: bold;
}
</style>
