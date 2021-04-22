<template>
  <div class="chip">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/main'

.chip
  display: inline-block
  background: color(blue)
  color: #FFFFFF
  border-radius: 50px
  font-size: 10px
  font-weight: fw(semi-bold)
  padding: 0.215rem 0.937rem
</style>
