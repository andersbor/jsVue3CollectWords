Vue.createApp({
    data() {
        return {
            word: null,
            words: [],
            message: null,
            specialMessage: null
        }
    },
    methods: {
        save(word) {
            this.words.push(word)
        },
        clear() {
            this.words = []
            this.word = null
            this.message = null
            this.specialMessage = null
        },
        show() {
            if (this.words == null || this.words.length == 0) {
                this.message = null
                this.specialMessage = "empty"
            }
            else {
                this.specialMessage = null
                this.message = this.words.toString()
            }
        }
    }
}).mount("#app")