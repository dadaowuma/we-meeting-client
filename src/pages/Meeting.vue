<template>
  <div>
    <ul class="nav-bar">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/login">登录、注册</router-link>
      </li>
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/meeting">会议进行中</router-link>
      </li>
      <li>
        <router-link to="/about">关于我们</router-link>
      </li>
    </ul>

    <h1>会议进行中</h1>
    <div>会议正在进行</div>
  </div>
</template>

<style scoped>
.nav-bar {
  list-style: none;
}
</style>
