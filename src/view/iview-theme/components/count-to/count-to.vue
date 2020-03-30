<template>
  <div>
    <Row :gutter="14">
      <i-col span="5">
        <Card>
          <p slot="title">
            <Icon type="waterdrop"></Icon>
            {{ $t('countTo.title') }}
          </p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row">
            <div class="count-to-con">
              <count-to :end="2534"/>
            </div>
          </Row>
        </Card>
      </i-col>
      <i-col span="5" class="padding-left-10">
        <Card>
          <p slot="title">
            <Icon type="code"></Icon>
            {{ $t('countTo.left_right') }}
          </p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row">
            <div class="count-to-con">
              <count-to :end="2534">
                <span slot="left">{{ $t('countTo.total') }}:&nbsp;</span>
                <span slot="right">&nbsp;{{ $t('countTo.times') }}</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
      <i-col span="7" class="padding-left-10">
        <Card>
          <p slot="title">
            <Icon type="paintbucket"></Icon>
            {{ $t('countTo.custom_style') }}
          </p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row">
            <div class="count-to-con">
              <count-to :end="2534" count-class="count-text" unit-class="unit-class">
                <span class="slot-text" slot="left">{{ $t('countTo.total') }}:&nbsp;</span>
                <span class="slot-text" slot="right">&nbsp;{{ $t('countTo.times') }}</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
      <i-col span="7" class="padding-left-10">
        <Card>
          <p slot="title">
            <Icon type="settings"></Icon>
            {{ $t('countTo.format_data') }}
          </p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row">
            <div class="count-to-con">
              <count-to :end="2534" count-class="count-text" unit-class="unit-class" :decimals="2">
                <span class="slot-text" slot="left">{{ $t('countTo.total') }}:&nbsp;</span>
                <span class="slot-text" slot="right">&nbsp;{{ $t('countTo.times') }}</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="14" style="margin-top: 14px;">
      <i-col span="5">
        <Card>
          <p slot="title">
            <Icon type="ios-color-wand"></Icon>
            {{ $t('countTo.convert_data') }}
          </p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row">
            <div class="count-to-con">
              <count-to :simplify="true" :end="2534" count-class="count-text" unit-class="unit-class">
                <span class="slot-text" slot="left">{{ $t('countTo.total') }}:&nbsp;</span>
                <span class="slot-text" slot="right">&nbsp;{{ $t('countTo.times') }}</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
      <i-col span="13" class="padding-left-10">
        <Card>
          <p slot="title">
            <Icon type="ios-shuffle-strong"></Icon>
            {{ $t('countTo.custom_units.title') }}
          </p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row">
            <div class="count-to-con">
              <count-to :simplify="true" :unit="unit" :end="253" count-class="count-text" unit-class="unit-class">
                <span class="slot-text" slot="left">{{ $t('countTo.custom_units.raw', { number: 253 }) }}</span>
              </count-to>
              <count-to :simplify="true" :unit="unit" :end="2534" count-class="count-text" unit-class="unit-class">
                <span class="slot-text" slot="left">{{ $t('countTo.custom_units.raw', { number: 2534 }) }}</span>
              </count-to>
              <count-to :simplify="true" :unit="unit" :end="257678" count-class="count-text" unit-class="unit-class">
                <span class="slot-text" slot="left">{{ $t('countTo.custom_units.raw', { number: 257678 }) }}</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
      <i-col span="6" class="padding-left-10">
        <Card>
          <p slot="title">
            <Icon type="android-stopwatch"></Icon>
            {{ $t('countTo.async_data') }}
          </p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row">
            <div class="count-to-con">
              <count-to :end="asynEndVal" count-class="count-text" unit-class="unit-class">
                <span class="slot-text" slot="left">{{ $t('countTo.total') }}:&nbsp;</span>
                <span class="slot-text" slot="right">&nbsp;{{ $t('countTo.times') }}</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="14" style="margin-top: 14px;">
      <i-col>
        <Card>
          <p slot="title">
            <Icon type="ios-analytics"></Icon>
            {{ $t('countTo.example') }}
          </p>
          <Row type="flex" justify="center" align="middle" class="countto-page-row">
            <div class="count-to-con">
              <count-to :delay="500" :simplify="true" :unit="unit2" :end="integratedEndVal" count-class="count-text" unit-class="unit-class">
                <span class="slot-text" slot="left">{{ $t('countTo.custom_units.raw', { number: integratedEndVal }) }}</span>
                <span class="slot-text" slot="right">&nbsp;{{ $t('countTo.times') }}</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
import CountTo from '_c/count-to'
export default {
  name: 'count_to_page',
  components: {
    CountTo
  },
  data () {
    return {
      end: 0,
      asynEndVal: 487,
      integratedEndVal: 3
    }
  },
  methods: {
    init () {
      setInterval(() => {
        this.asynEndVal += parseInt(Math.random() * 20)
        this.integratedEndVal += parseInt(Math.random() * 30)
      }, 2000)
    }
  },
  mounted () {
    this.init()
  },
  computed: {
    unit () {
      return [[3, this.$t('countTo.qty.thousand')], [4, this.$t('countTo.qty.tenthousand')], [5, this.$t('countTo.qty.over_hundred_thousand')]]
    },
    unit2 () {
      return [[1, this.$t('countTo.qty.dozen')], [2, this.$t('countTo.qty.hundred')], [3, this.$t('countTo.qty.thousand')], [4, this.$t('countTo.qty.tenthousand')], [5, this.$t('countTo.qty.over_hundred_thousand')], [6, this.$t('countTo.qty.over_million')], [7, this.$t('countTo.qty.over_ten_million')], [8, this.$t('countTo.qty.billion')]]
    }
  }
}
</script>

<style lang="less">
@baseColor: ~"#dc9387";
.countto-page-row{
  height: 200px;
}
.count-to-con{
  display: block;
  width: 100%;
  text-align: center;
}
.count-text{
  font-size: 50px;
  color: @baseColor;
}
.slot-text{
  font-size: 22px;
}
.unit-class{
  font-size: 30px;
  color: @baseColor;
}
</style>
