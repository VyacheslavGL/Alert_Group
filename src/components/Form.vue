<template>
    <div id="container1">
        <div class="form_container">
            <h1>{{title | titleName}}</h1>
            <form @submit.prevent="sendForm">
                <input type="text" placeholder="Ваш телефон*" v-mask="phoneMask">
                <button type="submit" :disabled="checkedR" :class="TextStyleButton">отправить</button>
                <div class="check_row">
                    <input id="check" class="checkbox" type="checkbox" v-model="checked">
                    <label for="check">Я принимаю условия</label>
                </div>
            </form>

        </div>
        <div class="p_container">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores corporis cum cumque cupiditate
                doloremque, doloribus eaque facilis hic id maiores molestias nobis, officiis pariatur porro recusandae
                similique totam voluptatibus. Beatae debitis excepturi explicabo ipsa, nisi obcaecati suscipit tempora
                tenetur.</p>


        </div>
    </div>
</template>

<script>

    // import axios from 'axios';
    import {mask} from 'vue-the-mask'

    export default {
        name: "Form",
        directives: {mask},
        data() {
            return {
                title: 'Lorem ipsum dolor.',
                tel: null,
                checked: false,
                access: false,
                phoneMask: '+7 (###) ###-##-##',
            }
        },
        methods: {
            async sendForm() {
                // const result = await axios.post('localhost', this.tel);
                // console.log('result - ', result);
                this.$router.push({name: 'home'})
            }
        },
        computed: {
            checkedR() {
                return this.checked ? this.access = false : this.access = true;
            },
            TextStyleButton() {
                return {
                    access: !this.access,
                    disabled: this.access
                }
            }
        },
        filters: {
            titleName(val) {
                return val.toUpperCase();
            }
        }
    }
</script>

<style scoped lang="scss">

    @font-face {
        font-family: CoreSansDS15Thin;
        src: url('~fonts/CoreSansDS15Thin.woff2') format('woff2'),
             url('~fonts/CoreSansDS15Thin.woff') format('woff');
        font-weight: 100;
        font-style: normal;
    }

    * {
        margin: 0;
    }

    #container1 {
        width: 100%;
        height: 85vh;
        margin: 0 0;
        overflow: hidden;
        background: url("~images/forform.png") repeat;

        .form_container {
            display: flex;
            flex-direction: column;
            margin: 150px auto 0 auto;
            width: 280px;
            height: 300px;
            color: white;
            font-size: 1.1em;


            h1 {
                text-align: center;
            }

            input[type='text'] {
                margin: 20px 10px;
                width: 89%;
                height: 38px;
                font-size: 15px;
                padding: 6px 0 4px 10px;
                padding-bottom: 5px \0;
                border: 1px solid #cecece;
                background: #F6F6f6;
            }

            button {
                margin: 1px 10px;
                width: 93%;
                height: 50px;
                color: white;
                font-size: 1em;
                text-align: center;
                border: none;

            }

            .check_row {
                display: flex;
                flex-direction: row;
                justify-content: start;
                align-items: center;
                margin: 25px 10px;

                /* прячем input checkbox */
                input[type="checkbox"] {
                    display: none;
                }

                /* стили для метки */
                label {
                    display: flex;
                    flex-direction: row;
                    justify-content: start;
                    align-items: center;
                    color: #fbffff;
                    cursor: default;
                    font-weight: normal;
                    line-height: 30px;
                    padding: 10px 0;
                    vertical-align: middle;
                    font-size: 14px;
                    width: 100%;
                }

                /* формируем внешний вид чекбокса в псевдоэлементе before */
                label:before {
                    content: " ";
                    color: #000;
                    display: inline-block;
                    font: 20px/30px Arial;
                    margin-right: 15px;
                    position: relative;
                    text-align: center;
                    text-indent: 0;
                    width: 15px;
                    height: 15px;
                    background: #2f2e2c;
                    border: 1px solid #a76441;
                    border-radius: 5px;
                    border-image: initial;
                    vertical-align: middle;
                }

                /* вариации внешнего вида в зав-ти от статуса checkbox */
                /* checked */
                input:checked + label:before {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    content: "\2713";
                    color: #a76441;


                }

                /* disabled */
                input:disabled + label:before {
                    background: #eee;
                    color: #aaa;
                }

                span {
                    width: 10px;
                }
            }
        }

        .p_container {
            margin: 100px auto;
            width: 900px;
            height: auto;
            color: white;
            font-family: CoreSansDS15Thin, serif;
            font-weight: 100;
        }

    }

    .access {
        cursor: pointer;
        background-color: #c78555;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(255, 76, 23, 0.19);
    }

    .disabled {
        background-color: grey;

    }

</style>