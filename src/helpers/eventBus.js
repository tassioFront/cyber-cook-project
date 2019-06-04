import Vue from 'vue'

export default new Vue({
    methods: {
        makeSearch(click) {
            this.$emit('valueInputed', click)
        },
        onMakeSearch(callback) {
            this.$on('valueInputed', callback)
        }
    }
})