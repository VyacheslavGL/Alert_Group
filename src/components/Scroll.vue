<template>
    <div id="container1">
        <div id="container2">
            <div class="main_text">
                <p class="main_text_p1">Lorem ipsum dolor sit amet, consectetur.</p>
                <p class="main_text_p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, error tenetur!</p>
                <p class="main_text_p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti deserunt
                    error est fuga, harum, ipsam magnam molestiae nam provident sit, sunt voluptates. Amet atque
                    consequatur culpa dicta dolores doloribus nemo, officia. Amet, consequuntur, tempore? Ad dolores
                    eaque, impedit laudantium nesciunt quam quibusdam similique. Alias commodi exercitationem illum
                    impedit laboriosam, minus mollitia perspiciatis!</p>
                <p class="main_text_p1">Lorem ipsum dolor sit.</p>

                <div v-for="item in blockArray" :key="item.id" class="block_array">
                    <p class="item_visible">{{item.name}}</p>
                    <p class="item_hidden">{{item.description}}</p>
                </div>
                <p id="map" class="main_map">МЕСТОПОЛОЖЕНИЕ</p>
                <p class="main_text_p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt dicta
                    doloribus est laborum omnis porro. Expedita hic itaque nemo quibusdam unde?</p>
                <p class="main_text_p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt dicta
                    doloribus est laborum omnis porro. Expedita hic itaque nemo quibusdam unde?</p>

                <div class="map">
                    <div id="place"></div>
                    <div id="icon"></div>
                </div>

                <p id="files" class="main_map">ФАЙЛЫ</p>
                <p class="main_text_p2">ВСЕ TAB1 TAB2 TAB3</p>
                <hr>
                <div v-for="(file, i) in files" :key="i" >
                    <div class="files_download_row">
                        <div class="files_download_column">
                            <p class="main_text_p2">{{file.title}}</p>
                            <div class="files_download_row2">
                                <h3>{{file.size}}</h3>
                                <hr>
                                <h3>{{file.time}}</h3>
                            </div>
                        </div>
                        <div class="files_download_row3">
                            загрузка
                        </div>
                    </div>
                    <hr>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis ducimus ex exercitationem
                    fugiat illo nihil non perferendis quo, recusandae? Accusantium autem facere fugiat illo ipsam iste
                    libero, nesciunt quia!45</p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Scroll",
        data() {
            return {
                blockArray: [
                    {
                        id: 1,
                        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam, autem laborum laudantium maiores nobis officiis porro possimus quae quos tempora voluptates.'
                    },
                    {
                        id: 2,
                        name: 'Lorem ipsum dolor sit amet.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, similique?'
                    },
                    {
                        id: 3,
                        name: 'Lorem ipsum dolor.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque esse expedita id illum ipsum maiores nisi nobis placeat sint.'
                    },
                    {
                        id: 4,
                        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
                    },
                    {
                        id: 5,
                        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque esse expedita id illum ipsum maiores nisi nobis placeat sint.'
                    },
                    {
                        id: 6,
                        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, similique?'
                    },
                    {
                        id: 7,
                        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eaque esse expedita id illum ipsum maiores nisi nobis placeat sint.'
                    },
                    {
                        id: 8,
                        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, similique?'
                    },
                    {
                        id: 9,
                        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, similique?'
                    },
                    {
                        id: 10,
                        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, similique?'
                    },
                    {
                        id: 11,
                        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, similique?'
                    },
                    {
                        id: 12,
                        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, similique?'
                    },
                ],
                files: [
                    {title: 'Lorem ipsum dolor sit.', size: '0.42 Mb', time: new Date().toLocaleString()},
                    {title: 'Lorem ipsum dolor sit.', size: '0.42 Mb', time: new Date().toLocaleString()},
                    {title: 'Lorem ipsum dolor sit.', size: '0.42 Mb', time: new Date().toLocaleString()},
                ]
            }
        },
    }
</script>

<style scoped lang="scss">

    $colorLine: #702200;
    $background: #f5f5f5;

    @mixin flexible ($row) {
        display: flex;
        flex-direction: $row;
        justify-content: center;
        align-items: center;
    }

    * {
        margin: 0;
    }

    #container1 {
        width: 100%;
        height: 87vh;
        margin: 0 0;
        overflow: hidden;
        color: white;
        background: $background url('~images/fon.jpg') repeat;

        #container2 {
            width: 100%;
            height: 99%;
            overflow: auto;
            padding-right: 15px;

            .main_text {
                max-width: 850px;
                margin: 0 auto;

                p:last-child {
                    margin: 150px 0;

                }

                html, body {
                    height: 99%;
                    overflow: hidden;
                }

                .main_text_p1 {
                    margin-top: 120px;
                    margin-bottom: 30px;
                    font-size: 3.8em;
                }

                .main_text_p2 {
                    margin-top: 30px;
                    font-size: 1.3em;
                }

                .main_map {
                    margin-top: 120px;
                    margin-bottom: 30px;
                    font-size: 2.8em;
                }

                .map {
                    position: relative;
                    margin-top: 50px;
                    width: 100%;
                    height: 400px;
                    border-radius: 15px;
                    background: $background url('~images/map.jpg') no-repeat;
                }

                #place {
                    position: absolute;
                    width: 120px;
                    height: 70px;
                    top: 86px;
                    left: 61%;
                    border-radius: 10px;
                    border: 1px solid black;
                    background-color: $background;
                    z-index: 100;
                }

                #icon {
                    position: absolute;
                    top: 150px;
                    left: 50%;
                    background: $background url('~images/icon.png') no-repeat;
                    z-index: 100;
                }

                hr {
                    margin-top: 30px;
                    border: none; /* Убираем границу */
                    background-color: $colorLine; /* Цвет линии */
                    color: red; /* Цвет линии для IE6-7 */
                    height: 1px; /* Толщина линии */
                }

                .files_download_row {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }

                .files_download_row3{
                    @include flexible (row);
                    padding-top: 20px;
                    height: 100px;
                }

                .files_download_column{
                    display: flex;
                    flex-direction: column;
                }

                .files_download_row2 {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-top: 7px;
                    font-family: sans-serif;
                    font-weight: 100;

                    hr {
                        size: 3px;
                        width: 1px;
                        height: 30px;
                        margin: 0 20px;
                    }
                }

                .block_array {
                    display: inline-block;
                    cursor: url("~images/cursor.png"), auto;
                    width: 265px;
                    height: 340px;
                    margin: 8px;
                    border-radius: 12px;
                    vertical-align: top;
                    background-image: url("~images/image.jpg");
                    background-position: center center;
                    background-repeat: no-repeat;

                }

                .block_array:hover .item_hidden {
                    margin: 5px 0;
                    padding: 0 25px;
                    opacity: 1;
                    transition: all ease 0.8s;

                }

                .block_array:hover{
                    opacity: 0.8;
                }

                .item_visible {
                    padding: 25px;
                    opacity: 1;
                    transition: all ease 0.8s;
                }

                .item_hidden {
                    opacity: 0;
                    transition: all ease 0.8s;
                }

            }

        }

    }


</style>