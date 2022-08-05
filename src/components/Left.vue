<!--
 * @Author: Hong.Zhang
 * @Date: 2022-07-29 14:27:58
 * @Description: 
-->
<template>
  <div class="container">
    <div class="source" contenteditable="true" @input="input" ref="divRef" >
    </div>
    <div class="bottom">
      <div>
        <div v-show="!!editorData.count" class="count">
          {{ editorData.count }}
        </div>
      </div>
      <div class="action">
        <el-button @click="audit" class="audit" type="primary" style="width:100px">审核</el-button>
        <el-button @click="clear" class="clear" style="width:100px">清空</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import { editorStore } from '../stores/EditorStore';
import { storeToRefs } from "pinia";

const editorData = editorStore();
const { source, results } = storeToRefs(editorData);

const divRef = ref();

function audit() {
  editorData.audit();
}

function clear() {
  editorData.clear();
}

function input(e) {
  editorData.setSource(e.target.innerText);
}

function assembleDecoredSource() {
  const sourceValue = source.value;
  const resultsValue = results.value;
  let cuurentIndex = 0;
  let arr = [];
  for (let i=0;i<resultsValue.length;i++) {
    const { startPos, endPos } = resultsValue[i]; 
    arr.push(sourceValue.substring(cuurentIndex, startPos));
    arr.push(`<span style="color: red;">${sourceValue.substring(startPos, endPos)}</span>`);
    cuurentIndex = endPos;
  }
  arr.push(sourceValue.substring(cuurentIndex));
  return arr.join("");
}

watch(results, () => {
  divRef.value.innerHTML = assembleDecoredSource();
})


</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  .source {
    flex: 1;
    margin: 24px;
    padding: 24px;
    font-size: 16px;
    &:focus-visible {
      outline: none;
    }
  }
  .bottom {
    height: 60px;
    box-sizing: content-box;
    margin: 0 24px 60px;
    padding: 0px 24px;
    box-shadow: 3px 3px 10px #444;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    .count {
      color: #444;
      font-size: 16px;
    }
  }
}
</style>