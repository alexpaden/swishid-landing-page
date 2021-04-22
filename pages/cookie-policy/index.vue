<template>
  <div class="canvas">
    <a-navigation />
    <a-sidebar :links="links" />
    <main>
      <h1>Cookie Policy</h1>
      <p>
        We believe in being transparent about how we collect and use data. This policy provides information about how and when we use cookies for these purposes. Capitalized terms used in this policy but not defined have the meaning set forth in our Privacy Policy which also includes additional details about the collection and use of information at Swish.
      </p>
      <h3 id="1">
        What Is A Cookie?
      </h3>
      <p>
        Cookies are small text files sent by us to your computer or mobile device, which enables Swish features and functionality. They are unique to your account or your browser. Session-based cookies last only while your browser is open and are automatically deleted when you close your browser. Persistent cookies last until you or your browser delete them or until they expire.
      </p>
      <p>To find out more about cookies, visit <a target="_blank" href="https://www.allaboutcookies.org/">this</a> site.</p>
      <h3 id="2">
        Does Swish Use Cookies?
      </h3>
      <p>
        Yes, unless your browser has "Do Not Track" enabled. Matomo creates a persistent cookie inside your browser which contains a Session ID. This Session ID is being used to analyze the usage of our website. No further cookies are created by Swish.
      </p>
      <h3 id="3">
        How Can You Get Rid Of Cookies?
      </h3>
      <p>
        Browser manufacturers provide help pages relating to cookie management in their products. Please see below for more information.
      </p>
      <ul>
        <li>
          <a target="_blank" href="https://support.google.com/chrome/answer/95647?hl=en-GB">Google Chrome</a>
        </li>
        <li>
          <a target="_blank" href="https://support.apple.com/en-us/guide/safari/manage-cookies-and-website-data-sfri11471/mac">Safari Desktop</a>
        </li>
        <li>
          <a target="_blank" href="https://support.apple.com/en-us/HT201265">Safari Mobile</a>
        </li>
        <li>
          <a target="_blank" href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">Mozilla Firefox</a>
        </li>
        <li>
          <a target="_blank" href="http://support.google.com/ics/nexus/bin/answer.py?hl=en&answer=2425067">Android</a>
        </li>
        <li>
          <a target="_blank" href="https://support.microsoft.com/en-us/kb/260971">Internet Explorer</a>
        </li>
      </ul>
      <h3 id="4">
        Opt Out From Tracking
      </h3>
      <a-cookie-frame />
    </main>
    <a-footer />
  </div>
</template>

<script>
import CookieFrame from '@/components/CookieFrame'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'

export default {
    components: {
        'a-cookie-frame': CookieFrame,
        'a-navigation': Navigation,
        'a-footer': Footer,
        'a-sidebar': Sidebar
    },

    data () {
        return {
            links: [
                {
                    id: 1,
                    title: 'What is a cookie?'
                },
                {
                    id: 2,
                    title: 'Does Swish Use Cookies?'
                },
                {
                    id: 3,
                    title: 'How Can You Get Rid Of Cookies?'
                },
                {
                    id: 4,
                    title: 'Opt Out From Tracking'
                }
            ]
        }
    }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.canvas
  line-height: 1.5
  letter-spacing: -0.03em

main
  padding: 80px 20px

  @include break-md
    padding: 80px 100px 80px 100px

  @include break-lg
    padding: 80px 100px 80px 450px

h1
  font-weight: fw(medium)
  color: #1f1a47

h3
  font-size: 18px
  font-weight: fw(medium)
  color: #1f1a47
  padding: 2rem 0 0

p
  color: #3c4257
  font-size: 16px
  padding: 0.5rem 0

strong
  color: #1f1a47
  font-weight: fw(medium)

ul
  color: #3c4257
  font-size: 16px
  line-height: 1.5
  padding: 0 0 0 2rem
  list-style: none

  li
    padding: 0.5rem 0
    position: relative

    &:before
      content: ""
      background: #c1c9d2
      width: 7px
      height: 7px
      border-radius: 50%
      position: absolute
      top: 0
      left: -20px
      top: 16px
      margin: auto

a
  color: color(blue)
  font-size: 16px
</style>
