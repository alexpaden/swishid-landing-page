<template>
  <div class="page">
    <nuxt-link id="logo" to="/">
      <img src="@/assets/images/logo.svg" alt="Swish logo">
    </nuxt-link>
    <h1>404</h1>
    <nuxt-link id="back-button" to="/">
      Mars is this way!
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/main'

.page
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  flex-flow: column

#logo
  position: absolute
  top: 40px
  left: 80px

#back-button
  background: color(blue)
  border-radius: 2px
  padding: 1.25rem 2.5rem
  color: #FFFFFF
  text-decoration: none
  @include font-size(16, 20)
  font-weight: fw(bold)

h1
  color: #0059ee
  @include font-size(120, 240)
  font-weight: fw(black)
</style>
