<template>
  <div>this is tab, value is {{delTab}}
    <br> {{aaaaa}}
    <br>
    <button @click="changeDelTab">tab-2</button>
  </div>
</template>
<script>
export default {
  name: 'tab',
  props: ['delTab', 'aaaaa'],
  methods: {
    changeDelTab: function () {
      this.$emit('update:delTab', 'tab-2')
      // this.$emit('ccc', 'tab-2')
    }
  }
}

</script>
