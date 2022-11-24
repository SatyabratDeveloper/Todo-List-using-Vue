let id = 0;
const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            todos: [
                { id: id++, text: 'Learn Git' },
                { id: id++, text: 'Learn TypeScript' },
                { id: id++, text: 'Learn Vue' }
            ]
        }
    },
    methods: {
        addTodo() {
            this.todos.push({ id: id++, text: this.newTodo })
        },
        removeTodo(todo) {
            this.todos = this.todos.filter(t => t !== todo)
        }
    }
})

app.mount('#app')