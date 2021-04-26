<template>
  <div class="canvas">
    <a-navigation />

    <header>
      <div class="container">
        <div id="content">
          <div id="extra">
            <a-chip>Document Manager</a-chip>
            <span>* Driver license & passport storage vault.</span>
          </div>
          <h1>Identity Document Management</h1>
          <p>
            We are building identity transactions for the internet.
            Our product is a simple interface for any
              business to start handling identity documents in a secure & usable manner.
          </p>
          <div id="cta">
            <a-button @click="scrollTo('#subscribe', 'center', 'center')">
              Learn more
            </a-button>
            <svg width="131" height="39">
              <use xlink:href="@/assets/images/pattern-button.svg/#pattern-button" />
            </svg>
          </div>
        </div>
        <div id="visual">
          <img
            id="img-dashboard"
            alt="Image of the Swish web platform dashboard design."
            src="@/assets/images/ipadt.png"
          >
          <img
            id="pattern-header"
            alt="Accent pattern for main dashboard image."
            src="@/assets/images/pattern-header.svg"
          >
        </div>
      </div>
    </header>

    <main>

          <section id="subscribe">
              <h5>Online Identity</h5>
              <p><b>What does your business stand to gain?</b></p>
              <br/>
                  <dl>
                      <dt><i>kyc (know-your-customer)</i></dt>
                      <dt><i>cip (customer-identification-program)</i></dt>
                      <dt><i>compliance</i></dt>
                      <dt><i>security</i></dt>
                      <dt><i>customer satisfaction</i></dt>
                      <dt><i>cyber security risk reduction</i></dt>
                  </dl>
              </p>
              <form
                  @submit.prevent="subscribe"
                  name="Notify Me!"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
              >
                  <input type="hidden" name="form-name" value="subscribe">
                  <a-text-field
                      :error="error"
                      :success="success"
                      v-model="form.email"
                      v-on:change="error = false"
                      @success="resetValidation"
                      name="email"
                      placeholder="Email"
                      type="email"
                  />
                  <a-button type="submit">
                      Request Information
                  </a-button>
              </form>
          </section>

    </main>

    <section id="about">
      <div class="container">
        <h3>Security meets simplicity.</h3>
        <p>
          The current market is dominated by thousands of digital identity providers both private and in-house.
          We believe that in order to succeed your product must be your focus.
        </p>
        <p>Our product is digital identity.</p>
        <a-card>
          <div class="circle-icon">
            <img
              alt="Fingerprint icon illustration"
              class="icon"
              src="@/assets/images/fingerprint.svg"
            >
          </div>
          <p>
            Your identity is the universal password to your <em>Identity</em>.
            Don't entrust every site to secure it.
          </p>
        </a-card>
      </div>
    </section>

    <section id="future">
      <div class="container">
        <div id="future-header">
          <div id="future-header-accent" />
          <h4>The future.</h4>
        </div>
        <div class="info">
          <div class="circle-icon">
            <img
              alt="Key icon illustration"
              class="icon"
              src="@/assets/images/key.svg"
            >
          </div>
          <div class="info-content">
            <span>Connect with Swish</span>
            <p>
                Simplified identity for the internet.
                Allowing you a new kind of transaction.
            </p>
          </div>
        </div>
        <div class="info">
          <div class="circle-icon">
            <img
              class="icon"
              src="@/assets/images/cloud.svg"
              alt="Key icon illustration"
            >
          </div>
          <div class="info-content">
            <span>Advanced Fraud Detection</span>
            <p>
                We are working to implement the most advanced system in fraud & identity detection.
            </p>
          </div>
        </div>
      </div>
    </section>

    <a-footer />
  </div>
</template>

<script>
import Button from '@/components/Button'
import Card from '@/components/Card'
import Chip from '@/components/Chip'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import TextField from '@/components/TextField'

export default {
    components: {
        'a-button': Button,
        'a-card': Card,
        'a-chip': Chip,
        'a-footer': Footer,
        'a-navigation': Navigation,
        'a-text-field': TextField
    },

    data () {
        return {
            error: false,
            form: {
                'form-name': 'subscribe',
                email: ''
            },
            success: false
        }
    },

    watch: {
        'form.email' (value) {
            this.error = false
        }
    },

    methods: {
        scrollTo (element, block, inline) {
            document.querySelector(`${element}`).scrollIntoView({
                behavior: 'smooth',
                block,
                inline
            })
        },

        resetValidation () {
            this.error = false
            this.success = false
        },

        encode (data) {
            return Object.keys(data)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
                .join('&')
        },

        validEmail (email) {
            /* eslint-disable-next-line no-useless-escape */
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(email)
        },

        async subscribe () {
            if (!this.validEmail(this.form.email)) {
                this.error = 'Please enter a valid email.'
                return
            }

            const response = await fetch(this.$route.path, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
                body: this.encode({ ...this.form })
            })

            const responseOK = response && response.ok

            if (responseOK) {
                this.success = 'Thanks for joining our beta list!'
                return
            }

            this.error = response.statusText
        }
    }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/main'

header
    padding: 60px 20px 60px 20px
    background: color(blue-lighten)

    @include break-sm
        padding: 60px 20px 20px

    @include break-md
        padding: 50px 80px 20px 80px

    @include break-lg
        height: calc(100vh - 80px)

    .container
        display: flex
        align-items: center
        justify-content: space-between

    #content
        width: 100%
        height: 100%
        display: flex
        flex-flow: column
        justify-content: center
        @include break-lg
            width: 40vw

        #extra
            background: #FFFFFF
            border-radius: 50px
            box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.15)
            padding: 0.25rem
            max-width: 381px
            display: flex
            align-items: center
            line-height: 1.2

            span
                @include font-size(10, 12)
                padding-left: 1rem
                font-weight: fw(medium)

        h1
            @include font-size(24, 36)
            font-weight: fw(bold)
            line-height: 1.125
            padding: 25px 0
            @include break-xl
                max-width: 447px

        p
            color: color(font-lighten)
            line-height: lh(md)
            padding-bottom: 25px
            max-width: 580px

        #cta
            position: relative

            button
                position: relative
                z-index: 15

            &:hover
                svg
                    fill: color(blue)
                    @include hover

            svg
                fill: color(blue)
                position: absolute
                top: 13px
                left: 10px
                z-index: 5
                @include hover
                @include break-lg
                    fill: #DDDFE2
                    z-index: 1

    #visual
        display: none

        @include break-lg
            padding-left: 2vw
            width: 60vw
            display: flex
            justify-content: flex-end
            position: relative

    #img-dashboard
        width: 100%
        max-height: 530px
        z-index: 10

    #pattern-header
        position: absolute
        z-index: 1
        top: -30px
        right: -30px

main
    padding: 50px 20px 0
    text-align: center

    @include break-sm
        background: linear-gradient(180deg, #F5F9FF 30%, #FFFFFF 30%)

    @include break-lg
        background: #FFFFFF
        padding: 100px

    h2
        padding-bottom: 30px
        @include font-size(26, 32)
        font-size: fs(h2)

    #cards
        display: flex
        flex-wrap: wrap
        justify-content: center
        width: 100%

        @include break-md
            justify-content: space-between
            flex-direction: row

        .card
            display: block
            flex: none
            padding: 1rem
            width: 80%
            max-width: 340px

            @include break-md
                flex: 1 1 0

            @include break-xl
                &:hover
                    box-shadow: 0px 0px 24px rgba(0, 23, 58, 0.1)
                    @include hover

            figure
                display: flex
                padding: 1rem 2.5rem 0
                margin: 0 0 1rem

                img
                    display: block
                    width: 100%
                    height: auto
                    max-width: 150px
                    margin: 0 auto

            .card-content
                padding: 0 0 2rem

                h5
                    font-size: fs(h6)
                    font-weight: fw(bold)
                    padding: 0 0 1rem

                p
                    color: color(font-lighten)

#about
    background: linear-gradient(180deg, #F5F9FF 85%, #FFFFFF 85%)
    text-align: center
    height: 380px
    padding: 0 20px

    @include break-md
        padding: 0 100px

    .container
        display: flex
        align-items: center
        justify-content: center
        flex-flow: column

    h3
        @include font-size(20, 28)
        padding-bottom: 30px
        max-width: 440px

    p
        color: color(font-lighten)
        max-width: 610px

        &:nth-child(3)
            padding-top: 1rem

    .card
        display: flex
        align-items: center
        box-shadow: 0px 24px 60px rgba(0, 0, 0, 0.1)
        max-width: 100%
        width: 100%
        max-height: 120px
        padding-right: 15px
        transform: translateY(52.5px)
        height: 100%

        @include break-lg
            width: 900px
            padding-right: 35px

        .circle-icon
            margin: 0 15px

            @include break-sm
                margin: 0 25px

            @include break-lg
                margin: 0 35px

        p
            @include font-size(12, 16)
            text-align: left
            max-width: initial

.circle-icon
    width: 40px
    height: 40px
    border-radius: 100px
    background: color(blue)
    display: flex
    align-items: center
    justify-content: center
    box-shadow: 0px 8px 10px rgba(52, 133, 255, 0.2)
    padding: 1rem

    .icon
        width: 20px
        height: 20px

#future
    padding: 125px 20px 70px 20px

    @include break-md
        padding: 125px 100px 100px 100px

    .container
        display: flex
        justify-content: space-between
        flex-wrap: wrap

    @include break-lg
        flex-flow: row
        justify-content: space-between

    #future-header
        max-width: 400px
        padding-bottom: 30px

    #future-header-accent
        background: color(blue)
        height: 3px
        width: 60px
        transform: translateY(-25px)

    h4
        @include font-size(24, 28)

    .info
        max-width: 400px
        display: flex
        margin-bottom: 30px

        @include break-lg
            margin-bottom: 0

        .circle-icon
            margin-right: 30px

        span
            @include font-size(18, 20)
            font-weight: fw(bold)
            line-height: 38px

        p
            color: color(font-lighten)
            line-height: lh(md)
            max-width: 320px

#subscribe
    display: flex
    align-items: center
    justify-content: center
    padding: 0 20px 100px 20px
    flex-flow: column
    text-align: center

    @include break-lg
        padding: 0 100px 100px 100px

    form
        width: 100%
        display: flex
        flex-flow: column
        align-items: center
        justify-content: center

    h5
        @include font-size(20, 28)

    p
        max-width: 610px
        color: color(font-lighten)
        padding-top: 15px

    .a-text-field-wrapper
        margin: 30px 0
        max-width: 580px
        @include hover

    button:hover
        background: color(blue-darken)
        @include hover
</style>
