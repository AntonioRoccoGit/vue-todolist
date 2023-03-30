const { createApp } = Vue;

createApp({
    data() {
        return {
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
}).mount("#app");