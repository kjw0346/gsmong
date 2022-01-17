<template>
<v-container class="nfpage">
    <v-card max-width="600px" class="card">
        <v-card-title>페이지를 찾을 수 없어요<span>:(</span></v-card-title>
        <v-card-text class="text--primary">
            <div>페이지가 보이지 않습니다.</div>
            <div>아마도 링크에 오타가 있는 것 아닐까요?</div>
        </v-card-text>
        <v-card-actions>
            <v-btn to="/">홈</v-btn>
        </v-card-actions>
    </v-card>
</v-container>
</template>

<style>
    .nfpage {
        height: 40vh;
    }
    .card {
        top: 50%;
        margin: 10px auto;
    }
</style>