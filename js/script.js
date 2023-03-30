const { createApp } = Vue;

createApp({
    data() {
        return {
            checked: "'&check;'",
            newTodoTxt: "",
            todos: [
                {
                    todo: "Finire il progetto (abbiamo solo 3 giorni)",
                    done: true
                },
                {
                    todo: "Studiare le arrow-function",
                    done: true
                },
                {
                    todo: "Andare in palestra",
                    done: false
                },
            ],
        };
    },
    methods: {
        addTodo() {

            if (this.newTodoTxt.length > 0) {
                this.todos.push({
                    todo: this.newTodoTxt,
                    done: false
                });
                this.newTodoTxt = "";
            }
        },
        addRemoveTodo(item) {
            let currItem = item;
            currItem.done = !currItem.done
        },
        crossFlag() {

        }
    }
}).mount("#app");