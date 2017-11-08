// https://api.icndb.com

$(function () {
    const vm = new Vue({
        el:'#app',
        data: {
            loading: false,
            showing: 'jokes',
            jokes: [],
            joke: null
        },
        methods: {
            loadJokes() {
                this.loading = true

                this.$http.get('https://api.icndb.com/jokes/random/25')
                .then(resp => {
                    this.jokes = resp.body.value
                    this.loading = false
                })
            }
        }
    })
    
})