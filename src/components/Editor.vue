<!--
 * @Author: Hong.Zhang
 * @Date: 2022-07-29 12:10:06
 * @Description: 
-->
<template>
  <div class="container">
    <div class="left">
      <Left />
    </div>
    <div class="right">
      <Right />
    </div>
  </div>
</template>

<script setup>
import Left from './Left.vue';
import Right from './Right.vue';

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  .left {
    flex: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .right {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>