import FooterComponent from '../footer/footer.js';
import HeaderComponent from '../header/header.js';
import MemoComponent from '../memo/memo.js';
import Vue from "vue";
import AppHtml from './app.html';
import './app.css';
import { VApp, VMain, VRow, VCol } from 'vuetify/lib';
import moment from 'moment';

const AppComponent = Vue.component('app', {
  template: AppHtml,
  components: {
    VApp,
    VMain,
    VRow,
    VCol,
    HeaderComponent,
    MemoComponent,
    FooterComponent,
  },
  created: function() {
    /* V tomto momente zavoláme BE, odkiaľ získame pole všetkých memos vo formáte:
      [
        {
          id: '',
          title: '',
          image: '',
          text: '',
          author: '',
          date: '',
          likes: 0,
          categories: ['', ''],
        },
        ...
      ]
     */
    // this.defaultMemos = memos;
  },
  data: () => ({
    defaultMemos: [],
    addedMemos: [],
  }),
  computed: {
    memos: {
      get: function() {
        return this.defaultMemos.concat(this.addedMemos);
      },
      set: function(newMemo) {
        const all = [...this.addedMemos];
        all.push(newMemo);
        this.addedMemos = all;
      }
    },
  },
  methods: {
    addMemo: function(memo) {
      // V tomto momente odosielame dáta na BE, memo obsahuje všetky dáta z memo
      this.memos = {
        id: moment().format('YYYYMMDDHHmmss'),
        title: memo.title,
        image: memo.image,
        text: memo.description,
        author: memo.autor,
        date: moment(),
        likes: 0,
        categories: [memo.category],
      };
    },
    addLike: function(id) {
      // V tomto momente dostaneme id memo, kam potrebujeme pridať ďalší like
      const index = this.addedMemos.findIndex(m => m.id === id);
      if (index !== -1) {
        this.addedMemos[index].likes = this.addedMemos[index].likes + 1 ;
      }
    },
    removeMemo: function(id) {
      // V tomto momente posielame na BE id memo, ktoré chceme odstrániť
      this.addedMemos = this.addedMemos.filter(m => m.id !== id);
    }
  }
});

export default AppComponent;

