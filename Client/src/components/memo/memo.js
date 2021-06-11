import Vue from "vue";
import MemoHtml from './memo.html';
import './memo.css';
import '../style.css';
import { VRow, VCol, VBtn } from 'vuetify/lib';
import moment from 'moment';

const MemoComponent = Vue.component('memo-component', {
    template: MemoHtml,
    components: {
        VRow,
        VCol,
        VBtn,
    },
    props: {
        title: String,
        date: Object,
        image: String,
        author: String,
        text: String,
        likes: Number,
        id: String,
        addLike: Function,
        removeMemo: Function,
    },
    methods: {
        moment,
        add: function() {
            this.$props.addLike(this.$props.id);
        },
        remove: function() {
            this.$props.removeMemo(this.$props.id);
        }
    },
});

export default MemoComponent;
