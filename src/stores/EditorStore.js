/*
 * @Author: Hong.Zhang
 * @Date: 2022-07-29 15:21:30
 * @Description: 
 */
import { defineStore, storeToRefs } from "pinia";

export const editorStore = defineStore("editorStore", {
  state: () => {
    return {
      source: '',
      results: Array(50).fill({
        startPos: 0,
        endPos: 2,
        origin: 'abc',
        correct: 'def',
      }),
    }
  },
  actions: {
    clear() {
      this.source = '';
      this.results = [];
    },
    audit() {
      fetch('/api/audit', {
        method: 'POST',
        body: JSON.stringify({
          source: this.source,
        }),
      })
      .then(data => {
        console.log('success');
      })
      .catch(error => {

      });
    }
  },
  getters: {
    count(state) {
      if  (!state.source) {
        return null;
      }
      return `total length${state.source.length}`;
    }
  }
})