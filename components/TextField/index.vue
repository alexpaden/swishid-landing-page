<template>
  <div class="a-text-field-wrapper">
    <img
      alt="Email icon illustration"
      class="icon"
      src="@/assets/images/mail.svg"
    >
    <input
      :class="classes"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      v-model="lazyValue"
    >
    <span
      id="a-text-field-error"
      v-if="error"
    >
      {{ error }}
    </span>
    <span
      id="a-text-field-success"
      v-if="success"
    >
      {{ success }}
    </span>
  </div>
</template>

<script>
export default {
    props: {
        error: {
            default: false,
            type: [Boolean, String]
        },
        success: {
            default: false,
            type: [Boolean, String]
        },
        name: {
            default: '',
            type: String
        },
        placeholder: {
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
    },

    data () {
        return {
            lazyValue: this.value
        }
    },

    computed: {
        classes () {
            return {
                'a-text-field': true,
                'a-text-field--error': this.error,
                'a-text-field--success': this.success
            }
        }
    },

    watch: {
        lazyValue (val) {
            this.$emit('input', val)
        },
        success () {
            if (this.success) {
                setTimeout(() => {
                    this.$emit('success', false)
                }, 3000)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/main'

.a-text-field-wrapper
    display: flex
    flex-flow: column
    position: relative
    width: 100%

    .icon
        position: absolute
        top: 0
        bottom: 0
        left: 0.75rem
        margin: auto

.a-text-field
    background: #F9FAFC
    border: 1px solid #DADBDD
    border-radius: 2px
    color: color(font)
    padding: 0.75rem 3rem
    font-size: 14px
    width: 100%
    @include hover

    &:focus
        background: #FFFFFF
        border: 1px solid #1074E7
        outline: none
        box-shadow: 0px 0px 0px 3px rgba(123,185,255,1)
        @include hover

    &--error
        border: 1px solid color(red)

        &:focus
            border: 1px solid color(red)
            box-shadow: 0px 0px 0px 3px rgba(255,215,220,1)

    &--success
        border: 1px solid color(green)

#a-text-field-error
    color: color(red)
    position: absolute;
    bottom: -22.5px;

#a-text-field-success
    color: color(green)
    position: absolute;
    bottom: -22.5px;
</style>
