<template>
  <footer>
    <div class="container">
      <nuxt-link to="/">
        <img
          id="f-logo"
          src="@/assets/images/logo.svg"
          alt="Swish logo illustration"
        >
      </nuxt-link>
      <div id="socials">
        <a target="_top" href="mailto:swishidentity@gmail.com">
          <svg width="29" height="19" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.247936 2.57396L8.09378 10.5656C8.15211 10.624 8.15211 10.7115 8.09378 10.7698L2.60315 16.6177C2.23127 16.9896 2.23127 17.5875 2.60315 17.9594C2.78544 18.1417 3.03335 18.2365 3.27398 18.2365C3.51461 18.2365 3.76252 18.1417 3.94481 17.9594L9.41357 12.1333C9.4719 12.075 9.56669 12.075 9.62503 12.1333L10.9594 13.4896C12.075 14.6198 13.5552 15.2469 15.1448 15.2542C16.7563 15.2615 18.2875 14.5833 19.4177 13.4385L20.7011 12.1333C20.7594 12.075 20.8542 12.075 20.9125 12.1333L26.3813 17.9594C26.5636 18.1417 26.8115 18.2365 27.0521 18.2365C27.2927 18.2365 27.5407 18.1417 27.723 17.9594C28.0948 17.5875 28.0948 16.9896 27.723 16.6177L22.2323 10.7698C22.1813 10.7115 22.1813 10.624 22.2323 10.5656L30.0855 2.57396C30.1802 2.47917 30.3334 2.54479 30.3334 2.67604V18.6667C30.3334 19.95 29.2834 21 28 21H2.33335C1.05002 21 2.00272e-05 19.95 2.00272e-05 18.6667V2.67604C2.00272e-05 2.54479 0.160436 2.48646 0.247936 2.57396V2.57396Z" />
            <path d="M15.1667 13.351C14.0875 13.351 13.074 12.9281 12.3156 12.1552L0.874989 0.510417C1.27603 0.189583 1.77186 0 2.31874 0H28.0073C28.5542 0 29.0573 0.189583 29.451 0.510417L18.0104 12.1552C17.2594 12.9208 16.2458 13.351 15.1667 13.351V13.351Z" />
          </svg>
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/swish-id">
          <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4806 0H1.62334C0.757228 0 0 0.656421 0 1.5577V18.286C0 19.1925 0.757228 20 1.62334 20H17.4756C18.3467 20 19 19.1873 19 18.286V1.5577C19.0049 0.656421 18.3467 0 17.4806 0ZM5.88955 16.671H3.16749V7.76244H5.88955V16.671ZM4.62255 6.40792H4.60275C3.7317 6.40792 3.16749 5.72545 3.16749 4.87106C3.16749 4.00104 3.74654 3.3342 4.6374 3.3342C5.52825 3.3342 6.07267 3.99583 6.09246 4.87106C6.09246 5.72545 5.52825 6.40792 4.62255 6.40792ZM15.8374 16.671H13.1154V11.7999C13.1154 10.633 12.7194 9.83589 11.7346 9.83589C10.9823 9.83589 10.5368 10.3725 10.3389 10.8935C10.2646 11.081 10.2448 11.3363 10.2448 11.5968V16.671H7.52278V7.76244H10.2448V9.00234C10.6408 8.40844 11.2594 7.55405 12.6996 7.55405C14.4863 7.55405 15.8374 8.79396 15.8374 11.4665V16.671Z" />
          </svg>
        </a>
        <a target="_blank" href="https://twitter.com/swishidentity">
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 2.36979C23.1151 2.77083 22.1691 3.04167 21.1723 3.16667C22.1894 2.54167 22.9727 1.55208 23.3388 0.375C22.3878 0.953125 21.335 1.375 20.2111 1.59896C19.3109 0.614583 18.0292 0 16.6154 0C13.8945 0 11.6923 2.26042 11.6923 5.04687C11.6923 5.44271 11.733 5.82812 11.8195 6.19792C7.72537 5.98958 4.09409 3.97917 1.66815 0.921875C1.24603 1.66667 1.00191 2.53646 1.00191 3.45833C1.00191 5.20833 1.87667 6.75521 3.19898 7.66146C2.38525 7.64062 1.62238 7.41146 0.961221 7.03125V7.09375C0.961221 9.54167 2.65989 11.5781 4.91291 12.0417C4.50095 12.1562 4.06357 12.2188 3.61602 12.2188C3.3007 12.2188 2.99046 12.1875 2.6904 12.125C3.31596 14.1302 5.13668 15.5885 7.29307 15.6302C5.60966 16.9844 3.48379 17.7917 1.17483 17.7917C0.778131 17.7917 0.386523 17.7656 0 17.7188C2.17165 19.1667 4.76033 20 7.53719 20C16.6052 20 21.5588 12.3073 21.5588 5.63542C21.5588 5.41667 21.5537 5.19792 21.5435 4.98437C22.5048 4.27083 23.3388 3.38542 24 2.36979Z" />
          </svg>
        </a>
      </div>
      <div id="links">
        <nuxt-link to="/privacy">
          Privacy Policy
        </nuxt-link>
        <nuxt-link to="/cookie-policy">
          Website Data Usage and Cookie Policy
        </nuxt-link>
      </div>
      <span id="copyright">
        © Swish Identity, Inc., 2021. All rights reserved.
      </span>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/main'

footer
    border-top: 1px solid #E9ECF0
    padding: 30px 20px
    font-size: fs(base)

    @include break-md
        padding: 30px 100px

    .container
        display: flex
        justify-content: space-between
        flex-flow: column

        @include break-lg
            flex-flow: row
            justify-content: space-between

    #f-logo
        padding-bottom: 15px

        @include break-xl
            padding-bottom: 0

    #socials
        padding-bottom: 15px

        @include break-xl
            padding-bottom: 0

        a
            padding: 0 0.35rem

            svg
                fill: #a2a8b3
                @include hover

            &:hover
                svg
                    fill: color(blue)
                    @include hover

    #links
        padding-bottom: 15px
        @include break-xl
            padding-bottom: 0

        a
            color: color(font)
            text-decoration: none
            @include hover

            &:first-child
                padding-right: 1rem

            &:hover
                color: color(blue)
                @include hover

    #copyright
        max-width: 285px
        color: color(font-accent)
</style>
