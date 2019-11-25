<template>
    <div>
        <p class="user-list-title">사용자가 추가한 영화</p>
        <UserListView></UserListView>

        <p class="user-list-title">추천받은 영화 리스트</p>
        <RecListView></RecListView>

        <router-link :to="{name: 'preference'}">
            <button class="insert-btn">추가하기</button>
        </router-link>

    </div>
</template>

<script>
    import UserListView from "@/components/UserListView";
    import RecListView from "@/components/RecListView";
    export default {
        name: "MyPage",
        components: {
            UserListView,
            RecListView
        }
    }
</script>

<style scoped>
    .user-list-title {
        text-align: left;
        position: relative;
        top: 70px;
        font-size: 25px;
        color: white;
        font-weight: bold;
        margin-left: 1em;
        margin-bottom: 1em;
    }
    .insert-btn, .recommand-btn{
        color: white;
        background-color: #EA5A69;
        border-radius: 10px;
        position: relative;
        top: 100px;
        font-size: 14px;
        font-weight: 600;
        width: 110px;
        height: 40px;
    }
    .insert-btn{
        margin-right: 60px;
    }

</style>