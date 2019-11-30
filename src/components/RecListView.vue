<template>
    <div>
        <hooper :itemsToShow="7" :centerMode="true" :initialSlide="3">
            <!--            <div v-if="hasResult"></div>-->
            <slide v-for="(movie, index) in recMovieLists" :key="movie.id" style="width:300px; z-index:2"
                   aria-hidden="true" :index="index">
                <div class="item-wrapper"  @mouseover="movie.upRating=true" @mouseleave="movie.upRating=false"> <!--지금 추가함-->
                    <div class="recRating-div" v-show="movie.upRating">
                        <p class="recRating-p">추천된 영화를<br> 평가해주세요.</p>
                        <star-rating :increment="0.5"
                                    :star-size="30"
                                    :max-rating="5"
                                    :padding="8"></star-rating>
                    </div>
                        <div class="user-list-img">
                            <img :src="movie.img" alt="load fail"/>
                            <!--<img src="'./assets/' +item.poster +'.png'"/>-->
                        </div>

                    <div class="user-list-p">
                        <p>{{movie.title}}</p>
                    </div>
                </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <!--            </div>-->
        </hooper>
    </div>
</template>

<script>
    import 'hooper/dist/hooper.css';
    import axios from "axios";
    import StarRating from 'vue-star-rating'
    import {
        Hooper,
        Slide,
        Navigation as HooperNavigation
    } from 'hooper';

    export default {
        name: "Main",
        components: {
            Hooper,
            Slide,
            HooperNavigation,
            StarRating
        },
        props: ['listTitle'],
        data: () => ({
            recMovieLists: [
                // {
                //     id: 1,
                //     title: '굿모닝 맨하탄',
                //     img: require(`../assets/굿모닝 맨하탄.jpg`),
                //     value: 0,
                //     upRating: false,
                // },
                // {
                //     id: 2,
                //     title: '관상',
                //     img: require('../assets/관상.jpg'),
                //     value: 0,
                //     upRating: false,
                // },
                // {
                //     id: 3,
                //     title: '그녀',
                //     img: require('../assets/그녀.jpg'),
                //     value: 0,
                //     upRating: false,
                // },
                // {
                //     id: 4,
                //     title: '더 테러 라이브',
                //     img: require('../assets/더 테러 라이브.jpg'),
                //     value: 0,
                //     upRating: false,
                // },
                // {
                //     id: 5,
                //     title: '1번가의 기적',
                //     img: require('../assets/1번가의 기적.jpg'),
                //     value: 0,
                //     upRating: false,
                // },
                // {
                //     id: 6,
                //     title: '',
                //     img: '',
                //     upRating: false,
                // }
            ],
        }),
        created() {
            this.RecMovieList();
        },

        // data: function(){
        //     return{
        //         movieLists: []
        //     }
        // },
        // computed:{
        //     hasResult: function(){
        //         return this.movieLists.length > 0
        //     }
        // },
        methods: {
            //  MyPage 띄울 때 추천리스트 뜨게하기위함
            RecMovieList: function () {
                axios.get('/users/recommovies',).then(res => {
                    // eslint-disable-next-line no-console
                    console.log(res.data)
                    const recMovies = res.data.slice(0, res.data.length)
                    this.recMovieLists = this.recMovieLists.concat(recMovies);
                }).catch((Error) => {
                    // eslint-disable-next-line no-console
                    console.log(Error)
                })
            },

        }
    }

</script>

<style scoped>
    .hooper-slide {
        width: 740px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
        align-items: center;
        /*font-size: 50px;*/
        border-radius: 10px;
        flex-shrink: 0;
        height: 100%;
        margin: .5em;
        list-style: none;
        background-color: rgb(48, 48, 48);
    }

    .hooper, .hooper * {
        box-sizing: border-box;
    }

    li {
        display: list-item;
        text-align: -webkit-match-parent;
        width: 30px;
    }

    ul {
        list-style-type: disc;
        transform: translate(0px, 0px);
        line-height: 1.7;
    }

    .is-active {
        background-color: rgb(48, 48, 48);
    }

    .hooper-list {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .hooper {
        position: relative;
        top: 50px;
        height: 400px;
        /*width: 100%;*/

    }

    div {
        display: block;
    }

    .hooper-track {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    ul {
        list-style-type: disc;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }

    p {
        text-align: center;
        padding: 20px;
        font-size: 40px;
    }

    .hooper-next.is-disabled, .hooper-prev.is-disabled {
        opacity: .3;
        cursor: not-allowed;
    }

    .hooper-prev {
        left: 0;
    }

    .hooper-next, .hooper-prev {
        background-color: transparent;
        border: none;
        padding: 1em;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    button {
        -webkit-appearance: button;
        -webkit-writing-mode: horizontal-tb !important;
        text-rendering: auto;
        color: buttontext;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: center;
        align-items: flex-start;
        cursor: default;
        background-color: buttonface;
        box-sizing: border-box;
        margin: 0em;
        font: 400 13.3333px Arial;
        padding: 1px 6px;
        border-width: 2px;
        border-style: outset;
        border-color: buttonface;
        border-image: initial;
    }

    svg {
        width: 24px;
        height: 24px;
    }

    svg:not(:root) {
        overflow: hidden;
    }

    .hooper-next.is-disabled, .hooper-prev.is-disabled {
        cursor: not-allowed;
    }

    body {
        /*font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        color: #2c3e50;
    }

    .user-list-p p {
        font-size: 10px;
        color: white;
        width: 100%;
        padding: 5px 0px 0px 0px;
        font-size: 15px;

    }

    .user-list-p {
        font-weight: 700;
        width: 100%;
    }

    .recRating-div {
        opacity: 0.6;
        background-color: black;
        position: absolute;
        left: 0;
        bottom: 58px;
        height: 150px;
        width: 100%;
    }

    .item-wrapper {
        position: relative;
    }

    .recRating-p {
        font-weight: 700;
        font-size: 15px;
    }

</style>