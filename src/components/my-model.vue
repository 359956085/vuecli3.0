<template>
  <div id="test">
    <span>{{content}}</span>
    <br>
    <input type="text" v-model="content">
    <br>
    <br>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <br>
    <br>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <br>
    <br>
    <my-checkbox v-model="content" :checked="checked" value="haha"></my-checkbox>
    <label for="checkbox">{{ content }}</label>
  </div>
</template>
<script>
import MyCheckbox from './my-checkbox'
export default {
  name: 'my-model',
  data: function () {
    return {
      content: 'v-model',
      checked: true,
      checkedNames: []
    }
  },
  components: {
    'my-checkbox': MyCheckbox
  }
}

</script>
<style>
#test {
  text-align: left;
}

</style>
