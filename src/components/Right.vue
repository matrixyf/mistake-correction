<!--
 * @Author: Hong.Zhang
 * @Date: 2022-07-29 14:28:06
 * @Description: 
-->
<template>
  <div class="container">
    <div>
      总共错误数: {{ editorData.results.length }}
    </div>
    <div v-for="(mistake, index) in editorData.results">
      <div class="item">
        <span class="index">
          {{ `${index+1}`.padStart(2, '0') }}
        </span>
        <span class="origin">
          {{ ` ${mistake.origin}` }}
        </span>
        <span :class="!!mistake.correct ? 'correct' : 'delete'">
          {{ !!mistake.correct ? ` ---> ${mistake.correct}` : '(删除)'}}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { editorStore } from '../stores/EditorStore';

const editorData = editorStore();

</script>

<style lang="scss" scoped>
.container {
  color: black;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: lightgray;
  .item {
    background-color: white;
    padding: 12px 24px;
    margin: 12px;
    background-color: white;
    .index {
      font-size: 18px;
    }

    .origin {
      color: red;
    }
    .correct {
      font-weight: bold;
    }
    .delete {
      color: red;
    }
  }
}
</style>