app.component('comment-form', {
    template: `
    <form @submit.prevent="onSubmit">
    <h3>Leave a comment</h3>
    <label for="comment">What do you think?</label>
    <textarea id="textarea" rows="2" v-model="comment"></textarea>
    <button type="submit">Submit</button>
    </form>
    `,
    data(){
        return {
            comment: ''
        }
    },
    emits: ['comment-submitted'],
    methods: {
        onSubmit(){
            this.$emit('comment-submitted', {comment: this.comment});

            // reset
            this.comment = '';
        }
    }
})