<template>
  <v-container>
    <v-card class="mx-auto" elevation="4" max-width="500">

          <div align="center">
          <!--TODO spinning math symbol on each side of `open your mind`-->
          <h1 align="center"><br>Open your mind!</h1>
          </div>
      <br/><br/>
          <v-spacer />
          <h3 align="center">마음을 열면 생각이 열리고</h3>
          <h3><br></h3>
          <h3 align="center">생각이 열리면 <br><br/><FONT COLOR="red">수학의 지름길</FONT>이 보입니다.</h3>
<h1><br/></h1>

    </v-card>

    <v-card class="mx-auto" elevation="4" max-width="500" title="Cogito, ergo sum!"> <!--TODO h1?-->
      <v-list lines="two">
        <v-list-item prependIcon="fas fa-brain" title="Why?" subtitle="왜 수학의 지름길인가?" />

        <h3>&nbsp;&nbsp;&nbsp;&nbsp;저희는 생각했습니다.</h3>
        <details>
        <summary>&nbsp;&nbsp;<FONT COLOR="RED">왜?</font></summary>

        <div align="center"><h3>&nbsp;&nbsp;&nbsp;&nbsp;우리 아이들은 쉬운 교육과정은 학교 선생님과 공부하고,<br>&nbsp;&nbsp;&nbsp;&nbsp;오히려 어려운 응용과 심화과정을<br>&nbsp;&nbsp;&nbsp;&nbsp;집에서 혼자 끙끙 숙제로 풀어야만 할까요?</h3></div>
        </details>
        <br/>
        <details>
        <summary align="center">&nbsp;&nbsp;<font color="orange">왜?</font></summary>

        <div align="center"><h3>&nbsp;&nbsp;&nbsp;&nbsp;우리 아이들은 모르는 것과 아는 것을 말하지 못하고,<br>&nbsp;&nbsp;&nbsp;&nbsp;수업시간 내내 조용히,<br>&nbsp;&nbsp;&nbsp;&nbsp;가만히 듣기만 해야 할까요?</h3></div>
          </details>
          <br/>
          <details>
        <summary align="right">&nbsp;&nbsp;<font color="blue">왜?</font></summary>

        <div align="center"><h3>&nbsp;&nbsp;&nbsp;&nbsp;한국의 수학교육은 주입식을 벗어나지 못하고,<br>&nbsp;&nbsp;&nbsp;&nbsp;수포자가 넘쳐날까요?</h3></div>
</details>
        <v-list-item prependIcon="far fa-comment" title="Talk!" subtitle="수학을 말하다" />

        <div align="center"><h3>&nbsp;&nbsp;&nbsp;&nbsp;<font color="red">'조용히 해'</font>, <font color="red">'입 다물어'</font> 라는 말이 사라지고<br/>&nbsp;&nbsp;&nbsp;&nbsp;활발히 질문과 답변이 오가며<br/>&nbsp;&nbsp;&nbsp;&nbsp;학생이 주도적으로 참여하는 수학교실</h3></div>

        <v-list-item prependIcon="far fa-grin-beam" title="HAPPY!" subtitle="수학이 즐거워진다!" />

        <div align="center"><h3>&nbsp;아이들이 즐겁고,<br/>행복해야 수학성적이 오르는 이상한 수학교실.<br/>상위 0.1%의 특급비밀인 <font color="pink">'말하는 수학공부법'</font>으로<br/>즐겁게 공부하는 수학교실<br/></h3></div>

      </v-list>
      <br/>
    </v-card>

    <v-card class="mx-auto" elevation="4" max-width="500">
      <v-list-item three-line>
        <v-list-item-content>
          <h2>수학의 지름길, 학습 시스템</h2>

          <v-timeline density="end">
            <v-timeline-item v-for="(item, i) in history" :key="i" size="8px" iconColor="blue">
              <v-container class="fill-height">
                <h1><p>{{ item.year }}</p></h1>
                <div>
                  <h2 :class="title">{{ item.title }}</h2>
                  <div class="pre-formatted">
                    {{ item.content }}
                  </div>
                  <p style="color: gray"><small>{{ item.env }}</small></p>
                </div>
              </v-container>
            </v-timeline-item>
          </v-timeline>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
            <v-btn to="/more">학습과정 보러가기</v-btn>
        </v-card-actions>
    </v-card>



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
            year: 'Point 01.',
            title: '지능형 개별맞춤학습',
            content: "학생 개개인의 학습 진도, 성취도, 학습능력, 진로에 따라"+
                "\n"+
                "최적화된 1:1 컨설팅을 통한 교육과정 설계",
            env: ''
          },
          {
            year: 'Point 02.',
            title: '지능형 개별맞춤학습',
            content: "기본 개념을 습득한 후"+
                "\n"+
                "교실에서 문제풀이와 심화확장 수업을 하는 교육",
          },
          {
            year: 'Point 03.',
            title: '완전학습 시스템',
            content: "철저한 확인학습 과정을 통해"+
                "\n"+
                "빈틈없는 첨삭과 오답관리"
          }
        ],
      }
    }
  });
</script>

<style>
  .card {
    top: 50%;
    margin: 10px auto;
  }
  .mx-auto {
    top: 50%;
    margin: 10px auto;
    overflow: auto;
  }
  p {
    margin: 0;
  }

  .topnav {
    display: flex;
  }

  .topnav .vs {
    padding-right: 10px;
    padding-left: 10px;
  }
  summary { cursor: pointer;
    font-size: 30px;
    display: inline-block;
  }
  .pre-formatted{
    white-space:pre;
  }

  details summary::-webkit-details-marker {
    display:none;
  }
  details > summary {
    list-style: none;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }


</style>
