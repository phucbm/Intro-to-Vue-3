app.component(
    'comment-list', {
        template: `
        <ul>
                <li v-for="(comment, index) in comments">
                <strong>#{{index+1}} {{comment.comment}}</strong>
        </li>
        </ul>
        `,
        props: {
            comments: {
                type: Array,
                required: true
            }
        }
    },
);