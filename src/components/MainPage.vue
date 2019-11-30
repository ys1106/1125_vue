<template>
    <div>
        <p style="color:white"> 동영상 자리</p>
        <div class="VideoBg">
            <video autoplay="autoplay" loop="loop" muted="muted" class="popcorn">
                <source src="@/assets/popcorn.mp4" type="video/mp4">
            </video>
            <a href="/users/signup">
                <button class="sign-btn main-btn">회원가입</button>
            </a>
            <a href="/users/login">
                <button class="login-btn main-btn">로그인</button>
            </a>
        </div>
    </div>
</template>

<script>
    // import VueVideoBackground from 'vue-video-background'

    export default {
        name: "Popcorn",

    }
</script>

<style scoped>
    .popcorn {
        height: 790px;
        width: 100%;
        position: relative;
        top: 20px;
        visibility: visible;
    }

    .sign-btn {
        left: 730px;
    }

    .login-btn {
        right: 730px;
    }

    .main-btn {
        color: white;
        background-color: #EA5A69;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
        top: 650px;
        position: fixed;
        width: 130px;
        height: 40px;
        border-color: #EA5A69;
    }

    .main-btn {
        margin-right: 60px;
    }
</style>