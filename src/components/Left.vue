<!--
 * @Author: Hong.Zhang
 * @Date: 2022-07-29 14:27:58
 * @Description: 
-->
<template>
  <div class="container">
    <div class="source">
      <el-input type="textarea" input-style="height: 100%" resize="none" v-model="editorData.source"/>
    </div>
    <div class="bottom">
      <div>
        <div v-show="!!editorData.count" class="count">
          {{ editorData.count }}
        </div>
      </div>
      <div class="action">
        <el-button @click="audit">审核</el-button>
        <el-button @click="clear">清空</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, } from 'vue';
import { editorStore } from '../stores/EditorStore';

let editorData = editorStore();

function audit() {
  editorData.audit();
}

function clear() {
  editorData.clear();
}


</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  .source {
    flex: 1;
  }
  .bottom {
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .count {
      color: black;
      font-size: 24px;
    }
  }
}
</style>