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
    
    <v-card class="mx-auto" elevation="4" max-width="500" title="학습과정">
      <v-list lines="two">
        <v-list-item prependIcon="fas fa-ban" title="학습과정" subtitle="채워넣기" />
      </v-list>
    </v-card>
    
    <v-card class="mx-auto" elevation="4" max-width="500">
      <v-list-item three-line>
        <v-list-item-content>
          <h2>연표</h2>

          <v-timeline density="end">
            <v-timeline-item v-for="(item, i) in history" :key="i" size="8px" iconColor="blue">
              <v-container class="fill-height">
                <p>{{ item.year }}</p>
                <div>
                  <h2 :class="title">{{ item.title }}</h2>
                  <div>
                    {{ item.content }}
                  </div>
                  <p style="color: gray"><small>{{ item.env }}</small></p>
                </div>
              </v-container>
            </v-timeline-item>
          </v-timeline>
        </v-list-item-content>
      </v-list-item>
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

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    data() {
      return {
        dialog_email: false,
        history: [
          {
            year: '2000',
            title: '학원 개원',
            content: '자랑스러운 학생들을 우수하게 키우기 위해 학원 개원',
            env: '#개원'
          }
        ],
      }
    }
  });
</script>

<style>
  .mx-auto {
    margin: 10px auto;
  }
</style>
