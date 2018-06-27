<template>
  <div>
    <p>my checkbox</p>
    <input type="checkbox" v-bind:checked="checked" v-on:change="$emit('change', $event.target.checked)">
    <label>{{value}}</label>
  </div>
</template>
<script>
export default {
  name: 'my-checkbox',
  props: [
    'checked',
    'value'
  ],
  model: {
    prop: 'checked',
    event: 'change'
  }

}

</script>
