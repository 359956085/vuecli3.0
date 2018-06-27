<template>
  <div id="test">
    <p>my-slot</p>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'my-slot'
}

</script>
<style>
#test {
  text-align: left;
}

</style>
