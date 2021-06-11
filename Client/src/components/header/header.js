import Vue from "vue";
import HeaderHtml from './header.html';
import './header.css';
import { VDialog, VCard, VCardTitle, VCardText, VDivider, VCardActions, VRow, VCol, VBtn } from 'vuetify/lib';
import ModalComponent from "@/components/modal/modal";

const HeaderComponent = Vue.component('header-component', {
    template: HeaderHtml,
    components: {
        VRow,
        VCol,
        VBtn,
        VDialog,
        VCard,
        VCardTitle,
        VCardText,
        VDivider,
        VCardActions,
        Modal: ModalComponent,
    },
    data: function(){
        return ({
            showModal: false,
        });
    },
    props: {
        addMemo: Function,
    },
    methods: {
      openModal: function() {
          this.showModal = true;
      },
      closeModal: function() {
          this.showModal = false;
      },
      addNew: function(memo) {
          this.$props.addMemo(memo);
          this.showModal = false;
      },
    },
});

export default HeaderComponent;