<template>
    <div class="main_div">
        <header>
            <div></div>
            <div>
                <router-link id="logo" to="/">Логотип</router-link>
            </div>
            <div>
                <router-link id="block" to="/form">ФОРМА</router-link>
            </div>
        </header>

        <main>
            <div class="main_left">
                <a href="#files" v-if="`${$route.path}` === '/' ">файлы</a>
            </div>
            <router-view/>
            <div class="main_right">
                <a href="#map" v-if="`${$route.path}` === '/' ">местоположение</a>
            </div>
        </main>

        <footer>

        </footer>
    </div>
</template>


<style scoped lang="scss">


    $font-stack: sans-serif, Helvetica;
    $colorLine: #702200;
    $background: #c78555;

    @mixin flexible ($row) {
        display: flex;
        flex-direction: $row;
        justify-content: center;
        align-items: center;
    }

    .main_div {
        width: 100%;
        height: 98vh;
        margin: 0 0;

        header, footer {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-right: 0;
            height: 50px;

            div:first-child{
                width: 215px;
            }

            #logo {
                font-size: 2.8em;
                font-family: $font-stack;
                flex-grow: 1;
                color: black;
                text-decoration: none;
            }

            #block{
                @include flexible (row);
                margin-right: 11px;
                width: 150px;
                height: 40px;
                color: white;
                text-decoration: none;
                background-color: $background;
            }

        }

        header:first-child {
            width: 98%;
        }

        main {

            display: flex;
            flex-direction: row;

        }

        .main_left, .main_right {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 50px;
            height: 87vh;
            text-align: center;
        }

        .main_left > a {
            @include flexible (row);
            position: absolute;
            top: 47%;
            left: -400px;
            right: 0;
            bottom: 0;
            width: 846px;
            height: 50px;
            margin: 0;
            transform: rotate(270deg);
            text-decoration: none;
            font-size: 1.3em;
        }

        .main_right > a {
            @include flexible (row);
            position: absolute;
            top: 47%;
            left: -400px;
            right: 0;
            bottom: 0;
            width: 846px;
            height: 50px;
            margin: 0;
            transform: rotate(90deg);
            text-decoration: none;
            font-size: 1.3em;
        }
    }

</style>
