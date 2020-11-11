var app = new Vue ({
    el: '#root',

    data: {
        // definire una lista di todo
        list: [
            {
                prodotto: "uova",
                classe: "del",
            },
            {
                prodotto: "pane",
                classe: "del",
            },
            {
                prodotto: "sale",
                classe: "del",
            }
        ],

        new_prodotto: "",

        // checkedItem: []
    },
    methods: {

        add_new_item(element) {
            // aggiungo l'item in list e di coseguenza viene stampata grazie al v-for nell'html
            this.list.push({
                prodotto: element,
                classe: "del"
            }
        );


            // dopo che l'item viene aggiunto assegno a item un valore vuoto in modo da pulire l'input
            this.new_prodotto = ""
        },

        remove_item(index) {
            this.list.splice(index, 1);
        },

        // del(text) {
        //     return `<del> ${text} </del>`
        // }

    }
})
