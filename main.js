var app = new Vue ({
    el: '#root',

    data: {
        // definire una lista di todo
        list: [
            {
                prodotto: "uova",
                classe: false,
            },
            {
                prodotto: "pane",
                classe: false,
            },
            {
                prodotto: "sale",
                classe: false
            }
        ],

        new_prodotto: "",

        isActive: false

        // checkedItem: []
    },
    methods: {

        add_new_item(element) {
            // aggiungo l'item in list e di coseguenza viene stampata grazie al v-for nell'html
            this.list.push({
                prodotto: element,
                classe: false
            }
        );


            // dopo che l'item viene aggiunto assegno a item un valore vuoto in modo da pulire l'input
            this.new_prodotto = ""
        },

        remove_item(index) {
            this.list.splice(index, 1);
        },

        transform(item) {

            if (item.classe == false) {
                item.classe = true
            } else item.classe = false

        }
        // del(text) {
        //     return `<del> ${text} </del>`
        // }

    }
})
