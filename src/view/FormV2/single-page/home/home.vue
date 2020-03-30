<template>
  <div>
    <Row :gutter="20">
      <i-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in topCards" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
          <count-to :end="infor.count" count-class="count-style"/>
          <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>
    <Row :gutter="20" style="margin-top: 10px;">
      <i-col :md="24" :lg="8" style="margin-bottom: 20px;">
        <Card shadow>
          <chart-pie style="height: 300px;" :value="pieData" :text="$t('home.users_access')"></chart-pie>
        </Card>
      </i-col>
      <i-col :md="24" :lg="16" style="margin-bottom: 20px;">
        <Card shadow>
          <chart-bar style="height: 300px;" :value="barData" :text="$t('home.users_activity')"/>
        </Card>
      </i-col>
    </Row>
    <Row>
      <Card shadow>
        <example style="height: 310px;" :value="barData"/>
      </Card>
    </Row>
  </div>
</template>

<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import Example from './example.vue'
export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Example
  },
  data () {
    return {}
  },
  mounted () {
    //
  },
  computed: {
    topCards () {
      return [
        { title: this.$t('home.new_users'), icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: this.$t('home.total_clicks'), icon: 'md-locate', count: 232, color: '#19be6b' },
        { title: this.$t('home.total_QnA'), icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: this.$t('home.total_share'), icon: 'md-share', count: 657, color: '#ed3f14' },
        { title: this.$t('home.total_chat'), icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
        { title: this.$t('home.total_pages'), icon: 'md-map', count: 14, color: '#9A66E4' }
      ]
    },
    pieData () {
      return [
        { value: 335, name: this.$t('home.total_interview') },
        { value: 310, name: this.$t('home.email_marketing') },
        { value: 234, name: this.$t('home.affiliate_advertising') },
        { value: 135, name: this.$t('home.video_advertising') },
        { value: 1548, name: this.$t('home.search_engine') }
      ]
    },
    barData () {
      return [
        { text: this.$t('date.week.Mon'), value: 13253 },
        { text: this.$t('date.week.Tue'), value: 34235 },
        { text: this.$t('date.week.Wed'), value: 26321 },
        { text: this.$t('date.week.Thu'), value: 12340 },
        { text: this.$t('date.week.Fri'), value: 24643 },
        { text: this.$t('date.week.Sat'), value: 1322 },
        { text: this.$t('date.week.Sun'), value: 1324 }
      ]
    }
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
</style>
