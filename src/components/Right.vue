<!--
 * @Author: Hong.Zhang
 * @Date: 2022-07-29 14:28:06
 * @Description: 
-->
<template>
  <div class="container">
    <div>
      total errors: {{ editorData.results.length }}
    </div>
    <div v-for="mistake of editorData.results">
    <div>
      
      <span class="origin">
        {{ mistake.origin }}
      </span>
      -
      <span class="correct">
        {{ mistake.correct }}
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
}
</style>