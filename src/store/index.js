import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      todolist: [
        {id: 1, todo: '영화보기', done: false},
        {id: 2, todo: '주말산책', done: true},
        {id: 3, todo: 'ES6 학습', done: false},
        {id: 4, todo: '잠실 야구장', done: false},
      ]
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addTodo(state, todo) {
      state.todolist.push({id: new Date().getTime(), todo: todo, done: false});
    }
  },
  getters: {
    getTodoList(state){
      return state.todolist;
    }
  }
})

export default store;