Vue.createApp({
    data() {
        return {
            tags: ['2kun9', '2mus8']
        }
    },
    methods: {
        addTag (event) {
            if (event.code == "Comma" || event.code == "Enter") {
                event.preventDefault();
                var val = event.target.value.trim();

                if (val.length > 0 && !this.tags.includes(val)) {
                    this.tags.push(val);
                    event.target.value = "";
                }
            }
        },
        removeTag (index) {
            this.tags.splice(index, 1);
        },
        removeLastTag (event) {
            if (event.target.value.length === 0) {
                this.removeTag(this.tags.length - 1);
            }
        }
    }
}).mount('#app');