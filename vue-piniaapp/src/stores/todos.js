import { defineStore } from "pinia";

export const todosStore = defineStore('todos', {
    state: () => {
        console.log('todos state is called')
        return {
            todos: [] //return default state
        }
    },
    actions: {
        //write here api : use async await
        async getTodos() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos')
                const todos = await response.json()
                this.todos = todos
                console.log(this.todos)
            }
            catch (err) {
                console.log('todos error')
            }
        }
    },
    //computed methods
    getters: {
        todoslist: state => state.todos
    }
})