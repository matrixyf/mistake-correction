<!--
 * @Author: Hong.Zhang
 * @Date: 2022-07-29 14:28:06
 * @Description: 
-->
<template>
  <div class="container">
    <div class="summaryWrapper">
      <div class="summary">
        全部错误数: <br> {{ editorData.results.length }}
      </div>
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
  font-size: 16px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: rgb(245, 246, 250);
  .summaryWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 20px;
    .summary {
      background-color: rgb(255, 230, 226);
      text-align: center;
      color: rgb(255, 68, 34);
      padding: 24px;
    }
  }
  
  .item {
    background-color: white;
    padding: 12px 24px;
    margin: 12px;
    border: 1px solid rgb(230, 230, 230);
    .index {
      font-size: 16px;
      color: grey;
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