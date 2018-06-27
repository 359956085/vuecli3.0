<template>
  <div id="test">
    <button v-for="tab in tabs" :key="tab" :class="['tab-button', {active: delTab === tab}]" @click="delTab = tab">{{tab}}</button>
    <component :is="currentTabComponent" class="tab"></component>
    <tab class="tab" aaaaa="bbb" :delTab.sync="delTab"></tab>
  </div>
</template>
<script>
import Tab from './tab/tab'
import Tab1 from './tab/tab-1'
import Tab2 from './tab/tab-2'
import Tab3 from './tab/tab-3'
export default {
  name: 'my-tab',
  data: function () {
    return {
      delTab: 'tab-1',
      tabs: ['tab-1', 'tab-2', 'tab-3']
    }
  },
  components: {
    'tab': Tab,
    'tab-1': Tab1,
    'tab-2': Tab2,
    'tab-3': Tab3
  },
  // methods: {
  //   even: function (val) {
  //     this.delTab = val
  //   }
  // },
  computed: {
    currentTabComponent: function () {
      return this.delTab
    }
  }
}

</script>
<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
#test {
  text-align: left;
}

</style>
