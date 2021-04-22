<template>
  <nav id="navigation">
    <div class="container">
      <nuxt-link id="brand" to="/">
        <img src="@/assets/images/logo.svg" alt="Swish Logo">
      </nuxt-link>
      <ul id="navbar">
        <li v-if="rootPath" class="nav-item">
          <a
            @click="scrollTo('main', 'end', 'end')"
            class="nav-link"
          >
            Features
          </a>
        </li>
        <li v-if="rootPath" class="nav-item">
          <a
            @click="scrollTo('#about', 'center', 'center')"
            class="nav-link"
          >
            About Us
          </a>
        </li>
        <img
          id="nav-divider"
          v-if="rootPath"
          class="nav-item"
          src="@/assets/images/nav-divider.svg"
        >
        <li class="nav-item">
          <a
            @click="scrollTo('#subscribe', 'center', 'center')"
            v-if="rootPath"
            class="nav-link"
          >
            Join Swish
          </a>
          <nuxt-link
            v-if="!rootPath"
            class="nav-link"
            to="/"
          >
            Join Swish
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    computed: {
        rootPath () {
            return this.$route.path === '/'
        }
    },

    methods: {
        scrollTo (element, block, inline) {
            document.querySelector(`${element}`).scrollIntoView({
                behavior: 'smooth',
                block,
                inline
            })
        }
    }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/main'

#navigation
    background: #FFFFFF
    border-bottom: 1px solid #E9ECF0
    box-shadow: 0px 5px 15px 1px rgba(0,0,0,0.05)
    height: 80px
    padding: 24px 20px
    position: sticky
    top: 0
    right: 0
    left: 0
    margin: auto
    width: 100%
    z-index: 100

    @include break-md
        padding: 24px 80px

    .container
        display: flex
        justify-content: space-between
        align-items: center

#navbar
    display: flex
    align-items: center
    list-style: none

.nav-item
    display: none

    &:first-child
        padding-right: 15px

    &:last-child
        display: flex

        .nav-link
            cursor: pointer
            color: color(blue)
            padding: 0.5rem 1rem

            &:hover
                background-color: #F5F9FF
                border-radius: 2px

    &:not(:first-child):not(:last-child)
        padding: 0 15px

    @include break-xl
        display: flex

.nav-link
    cursor: pointer
    color: color(font)
    text-decoration: none
    font-size: 16px
    @include hover

    &:hover
        color: color(blue)
        @include hover
</style>
