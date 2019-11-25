<template>
    <div>
        <p style="color:white"> 동영상 자리</p>
        <!--        <vue-video-background videoSrcWebm="@\src\assets\popcorn.mp4"></vue-video-background>-->
        <!--        <video class="video" ref="video">-->
        <!--            <source src="@/assets/popcorn.mp4" type="video/mp4">-->
        <!--        </video>-->
        <!--        <video ref="videoRef" src="" id="video-container" width="100%" controls ></video>-->
        <div class="video-div">
            <video src="@/assets/popcorn.mp4" controls autoplay muted="muted"></video>
            <router-link :to="{name: 'mypage'}">
                <button class="mypage-btn">마이페이지</button>
            </router-link>
            <!--            <router-link :to="{name: 'singup'}">-->
            <!--                <button class="insert-btn">회원가입</button>-->
            <!--            </router-link>-->
            <!--            <router-link :to="{name: 'login'}">-->
            <!--                <button class="insert-btn">로그인</button>-->
            <!--            </router-link>-->
        </div>

    </div>
</template>

<script>
    // import VueVideoBackground from 'vue-video-background'

    export default {
        name: "Popcorn",
        computed: {
            // videoElement () {
            //     return this.$refs.video;
            // },
            // videoPlaying () {
            //     return this.$refs.video.play();
            // }
        },
        // created: {
        //     videoElement () {
        //         return this.$refs.video;
        //     },
        //     videoPlaying () {
        //         return this.$refs.video.play();
        //     }
        // }
        // mounted: function() {
        //     this.$refs.videoRef.src = "@/src/assets/popcorn.mp4";
        //     this.$refs.videoRef.play();
        // }
    }
</script>

<style scoped>
    #video-container {
        height: 800px;
        width: 100%;
        position: relative;
        top: 20px;
    }
    .mypage-btn{
        top:650px;
        position: absolute;
    }
    .mypage-btn{
        color: white;
        background-color: #EA5A69;
        border-radius: 10px;

        font-size: 14px;
        font-weight: 600;
        width: 110px;
        height: 40px;
    }
    .mypage-btn{
        margin-right: 60px;
    }
</style>