const addOneItems = (state, payload) => {
  const obj = { completed: false, item: payload };
  localStorage.setItem(payload, JSON.stringify(obj));
  state.todoItems.push(obj);
};
const removeOneItems = (state, payload) => {
  localStorage.removeItem(payload.items.item);
  state.todoItems.splice(payload.index, 1);
};
const toggleOneComplete = (state, payload) => {
  payload.completed = !payload.completed;
  localStorage.removeItem(payload.item);
  localStorage.setItem(payload.item, JSON.stringify(payload));
};
const clearAllItems = state => {
  localStorage.clear();
  state.todoItems = [];
};

export { addOneItems, removeOneItems, toggleOneComplete, clearAllItems };
