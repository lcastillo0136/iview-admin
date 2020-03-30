<template>
  <div>
    <h3>{{ $t('multilevel.level.menu') }} -> {{ $t('multilevel.level.second', { second: 2}) }} -> {{ $t('multilevel.level.third', { third: 2, forth: 1}) }} </h3>
    <Input v-model="val" style="width: 200px"></Input>
  </div>
</template>
<script>
export default {
  name: 'level_2_2_1',
  data () {
    return {
      val: ''
    }
  }
}
</script>
