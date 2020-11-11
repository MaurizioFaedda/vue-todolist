var app = new Vue ({
    el: '#root',

    data: {
        // definire una lista di todo
        list: [
            "uova", "latte", "birra"
        ],

        item: ""
    },
    methods: {

        add_new_item(item) {
            this.list.push(this.item);
        }
    }
})
