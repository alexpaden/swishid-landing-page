<template>
  <aside>
    <a
      :class="activeLink === link.id ? 'selected' : ''"
      :key="link.id"
      v-for="link in links"
      @click="scrollTo(link.id, 'center', 'center')"
    >
      {{ link.title }}
    </a>
  </aside>
</template>

<script>
export default {
    props: {
        links: {
            default () {
                return []
            },
            type: Array
        }
    },

    data () {
        return {
            activeLink: 1
        }
    },

    methods: {
        scrollTo (element, block, inline, key) {
            this.activeLink = element
            document.getElementById(element).scrollIntoView({
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

aside
  position: fixed
  top: 0
  left: 0
  margin: auto
  display: none
  flex-flow: column
  padding: 160px 40px 0 80px

  @include break-lg
    display: flex

  a
    cursor: pointer
    text-decoration: none
    color: color(font-accent)
    font-size: 16px
    @include hover

    &.selected
      color: color(blue)

    &:hover
      @include hover
      color: color(blue)

    &:not(:first-child)
      margin: 1rem 0 0
</style>
