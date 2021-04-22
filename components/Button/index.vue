<template>
  <button
    @click="e => this.$emit('click', e)"
    :name="name"
    :type="type"
    :value="value"
    class="button"
  >
    <slot />
  </button>
</template>

<script>
export default {
    props: {
        name: {
            default: '',
            type: String
        },
        type: {
            default: '',
            type: String
        },
        value: {
            default: '',
            type: String
        }
    }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/main'

.button
    background: color(blue)
    border-radius: 2px
    padding: 0.715rem 1.5rem
    color: #FFFFFF
    text-align: center
    font-size: 16px
    font-weight: bold
</style>
