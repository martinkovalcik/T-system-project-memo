import Vue from "vue";
import ModalHtml from './modal.html';
import './modal.css';
import { VDialog, VSelect, VBtn, VCard, VCardTitle, VCardText, VDivider, VCardActions, VSpacer, VTextField, VTextarea } from 'vuetify/lib';

const ModalComponent = Vue.component('modal-component', {
    template: ModalHtml,
    components: {
        VDialog,
        VCard,
        VCardTitle,
        VCardText,
        VDivider,
        VCardActions,
        VSpacer,
        VBtn,
        VTextField,
        VTextarea,
        VSelect,
    },
    props: {
        addNew: Function,
        closeModal: Function,
    },
    data: function(){
        return ({
            title: '',
            autor: '',
            image: '',
            description: '',
            category: '',
            categories: [
                'domov',
                'zábava',
            ],
        })
    },
    methods: {
        submit: function() {
            // Tu by malo byt volanie na BE, kde prida nove memo do DB
            this.$props.addNew({
                title: this.title,
                autor: this.autor,
                image: this.image,
                description: this.description,
                category: this.category,
            });
            this.reset();
        },
        cancel: function() {
            // Tu by malo byt volanie na BE, kde vymaze memo z DB
            this.$props.closeModal();
            this.reset();
        },
        reset: function() {
            this.title = '';
            this.autor = '';
            this.image = '';
            this.description = '';
            this.category = '';
        },
    }
});

export default ModalComponent;