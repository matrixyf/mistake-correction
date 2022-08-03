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
      results: [],
    }
  },
  actions: {
    clear() {
      this.source = '';
      this.results = [];
    },
    setSource(text) {
      this.source = text;
    },
    audit() {
      fetch('https://text-correction-server.vercel.app/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: this.source,
        }),
      })
      .then(res => res.json())
      .then(data => {
        console.log(`data = `, data);
        const results = handleResulst(data);
        this.results = results;
      })
       .catch(error => {
        alert(error);
      });
    }
  },
  getters: {
    count(state) {
      if (!state.source) {
        return null;
      }
      return `全文字数: ${state.source.length}`;
    },
  }
})

function handleResulst(data) {
  const resultsObj = data.data;
  const resultsArray = [
    ...resultsObj.punc,
    ...resultsObj.leader,
    ...resultsObj.org,
    ...resultsObj.pol,
    ...resultsObj.grammar_pc,
    ...resultsObj.order,
    ...resultsObj.idm,
    ...resultsObj.word,
    ...resultsObj.char,
    ...resultsObj.redund,
    ...resultsObj.miss,
    ...resultsObj.dapei,
    ...resultsObj.number,
    ...resultsObj.addr,
    ...resultsObj.name,
  ];
  resultsArray.sort((a, b) => {
    return a[0] - b[0];
  });
  const mappedArray = resultsArray.map((item, index) => {
    return {
      startPos: item[0],
      endPos: item[0] + origin.length,
      origin: item[1],
      correct: item[2],
    }
  });
  return mappedArray;
}