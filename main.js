var app = new Vue ({
    el: '#root',

    data: {
        // definire una lista di todo
        list: [
            "uova", "latte", "birra"
        ],

        item: "",

        checkedItem: []
    },
    methods: {

        add_new_item(item) {
            // aggiungo l'item in list e di coseguenza viene stampata grazie al v-for nell'html
            this.list.push(this.item);

            // dopo che l'item viene aggiunto assegno a item un valore vuoto in modo da pulire l'input
            this.item = ""
        },

        remove_item(index) {
            this.list.splice(index, 1);
        },

        del(text) {
            return `<del> ${text} </del>`
        }

    }
})
