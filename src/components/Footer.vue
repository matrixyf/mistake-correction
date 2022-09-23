<!--
 * @Author: Hong.Zhang
 * @Date: 2022-09-24 00:05:39
 * @Description: 
-->
<template>
  <div class="container">
    <a class='icp' href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2022022861号-1</a>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .icp {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ccc;
    &:hover {
      color: #666;
    }
  }
}
</style>