<template>
  <v-container>
    <v-card class="mx-auto" elevation="4" max-width="500">
      <v-list-item three-line>
        <v-list-item-content>
          <h2>김진우 원장</h2>
          <p>
            <v-icon>mdi mdi-city</v-icon> 성남 분당구 정자동
          </p>
          <p>
            <v-icon>mdi mdi-heart</v-icon> 수학, 학생들
          </p>
        </v-list-item-content>

        <v-spacer />

        <v-avatar class="profile" color="grey" size="25%">
          <v-img src="../assets/cover4.jpg" max-width="150px"></v-img>
        </v-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn icon @click="dialog_email = true">
          <v-icon>fas fa-envelope</v-icon>
        </v-btn>
        <v-btn icon href="https://blog.naver.com/kjw0346">
          <v-icon>fas fa-blog</v-icon>
        </v-btn>
        <v-btn icon href="https://open.kakao.com/o/sCJltUUd">
          <v-icon>far fa-comments</v-icon>
        </v-btn>
        <v-btn icon href="https://github.com/kjw0346">
          <v-icon>fab fa-github</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    

    


    <v-dialog v-model="dialog_email">
      <v-card>
        <v-card-title class="headline">Email</v-card-title>
        <v-card-text>
          kjw0346@naver.com
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn href="mailto:kjw0346@naver.com">
                        이메일 보내기
          </v-btn>
          <v-btn text @click="dialog_email = false">
                        닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>



<style>
  .mx-auto {
    margin: 10px auto;
  }
</style>
