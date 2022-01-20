<template>
<v-container class="more">
    <v-card max-width="700px" class="card">
        <v-card-title>상세 교육과정</v-card-title>
      <v-timeline density="end">
        <v-timeline-item v-for="(item, i) in history" :key="i" size="8px" iconColor="blue">
          <v-container class="fill-height">
            <h2><p>{{ item.year }}</p></h2>
            <div>
              <h3 :class="title">{{ item.title }}</h3>
              <div>
                {{ item.content }}
              </div>
            </div>
          </v-container>
        </v-timeline-item>
      </v-timeline>
      <br/>
          <div align="center">
    <table>

      <tr v-for="item in items" :key="item.title">
        <td style="width:150px" bgcolor="green"><div align="center"><span v-html="item.title"></span></div></td>
        <td><span>{{item.link}}</span></td>

      </tr>
    </table>
  </div>
        <v-card-actions>
            <v-btn to="/">홈</v-btn>
        </v-card-actions>
    </v-card>
</v-container>
</template>


<script>

export default {
  data() {
    return {
      history: [
        {
          year: '1분기(12월~2월)',
          title: '신학기 학년과정 선수학습',
          content: '(1~2년 선행+심화, 심화+사고력, 경시)',
        },
        {
          year: '2분기(3월~5월)',
          title: '1학기 학년과정 심화학습',
          content: '(1~2년 선행+사고력, 경시)',
        },
        {
          year: '3분기(6월~8월)',
          title: '2학기 학년과정 심화학습',
          content: '(1~2년 심화+사고력, 경시)',
        },
        {
          year: '4분기(9월~11월)',
          title: '2학기 학년과정 심화학습',
          content: '(1~2년 선행+심화, 심화+사고력, 경시)',
        },
      ],
      items: [
        {
          "title": "<strong>학년일반</strong>",
          "link": "기본 개념과 원리의 이해, 확인학습, "+
              "MAX-File 문제풀이 등의 교과학습을 통해 수학에 흥미를 갖게 하고 서술형 및 응용문제 적용능력 "+
              "배양을 위한 기본학습 과정",
        },
        {
          "title": "<strong>학년심화</strong>",
          "link": "고난이도 심화 학습을 통한 개념이해의 확장, "+
              "응용력, 문제해결능력의 향상과 특목고 "+
              "입시 및 경시대회를 위한 심화학습 과정",
        },
        {
          "title": "<strong>선행일반</strong>",
          "link": "기초 개념이해 및 개념확인 문제풀이를 통해 "+
              "앞으로의 체계적인 단계별 학습을 위한 기초학습 과정",
        },
        {
          "title": "<strong>선행심화</strong>",
          "link": "명쾌한 문제해결능력과 폭넓은 사고능력 업그레이드를 위한 필수 심화학습 과정",
        },
        {
          "title": "<strong>융합사고력</strong>",
          "link": "창의력 및 발표력, 언어구사력, 프리젠테이션 능력 등을 자연스럽게 습득하면서 최상의 학습효과와 창의력 향상 및 특목고 구술면접 대비능력 강화를 위한 능동적 참여학습 과정",
        },
        {
          "title": "<strong>개별첨삭 클리닉</strong>",
          "link": "개별 학습 결과를 분석하고 취약영역을 파악하여 유사문제를 통해 완벽한 수학학습능력 성취를 위한 온라인 스마트러닝 학습",
        }
      ]
    }
  }
}
</script>
<style>
td, th {
  padding: 10px;
  border: 1px solid #ccc;
}
    .card {
        top: 50%;
        margin: 10px auto;
      overflow: auto;
    }

</style>
