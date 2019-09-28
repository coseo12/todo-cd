const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          let items = JSON.parse(localStorage.getItem(localStorage.key(i)));
          arr.push(items);
        }
      }
    }
    return arr;
  },
};

const state = {
  headerText: 'TODO it!',
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
  addOneItems(state, payload) {
    const obj = { completed: false, item: payload };
    localStorage.setItem(payload, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeOneItems(state, payload) {
    localStorage.removeItem(payload.items.item);
    state.todoItems.splice(payload.index, 1);
  },
  toggleOneComplete(state, payload) {
    payload.completed = !payload.completed;
    localStorage.removeItem(payload.item);
    localStorage.setItem(payload.item, JSON.stringify(payload));
  },
  clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  },
};

export default {
  state,
  getters,
  mutations,
};
