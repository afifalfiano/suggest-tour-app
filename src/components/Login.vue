<template>
    <div>
        <h1>Log In</h1>
        <label for="">Title</label>
        <input type="text" v-model="title">
        <label for="">Content</label>
        <input type="text" v-model="content">
        <button v-on:click="onSubmit">Save</button>

    </div>    
</template>

<script>
export default {
    name: 'LoginApp',
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        onSubmit() {
            console.log('submit');
            this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.title,
                content: this.content,
                id: 1
            }).then(response => {
                console.log(response, 'res')
            }).catch(err => {
                console.log(err, 'err')
            })
        }
    }
}
</script>

<style scoped>

</style>