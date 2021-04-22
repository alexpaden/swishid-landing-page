<template>
  <iframe
    src="https://analytics.swishid.com/index.php?module=CoreAdminHome&action=optOut&language=en&backgroundColor=ffffff&fontColor=3c4257&fontSizei&fontFamily=inter"
  />
</template>

<style lang="sass">
@import '@/assets/styles/main'

iframe
    color: #3c4257
    border: 0
    height: 200px
    width: 100%

    @include break-sm
        height: 120px

    @include break-md
        height: 100px

</style>
