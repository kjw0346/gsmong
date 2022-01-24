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
