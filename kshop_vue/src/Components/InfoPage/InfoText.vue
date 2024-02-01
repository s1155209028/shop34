<template>
  <div>
      <div class="col4">
        <h6>Description</h6>
      </div>

    <div class="container pt-3">
      <div class="row">
        <p>this is a description</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoText',
  methods: {
    moreInfoSelect(index) { //More Info area tab selector
      return this.active = index
    },
  }
}
</script>

<style scoped>
.col4 h6 {
  height: 25px;
  padding-bottom: 25px;
  border-bottom:2px solid lightgrey;
  color: grey;
  cursor: pointer;
}
</style>
