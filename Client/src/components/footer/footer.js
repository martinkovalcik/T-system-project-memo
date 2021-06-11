import Vue from "vue";
import FooterHtml from './footer.html';
import './footer.css';
import { VRow, VCol, VBtn, VFooter } from 'vuetify/lib';

const FooterComponent = Vue.component('footer-component', {
    template: FooterHtml,
    components: {
        VRow,
        VCol,
        VBtn,
        VFooter,
    }
  
    });

export default FooterComponent;
