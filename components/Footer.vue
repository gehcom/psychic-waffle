<template>
  <v-footer padless>
    <v-card
      flat
      tile
      color="black"
      class="lighten-1 white--text text-center footer"
    >
      <v-card-text>
        <v-btn class="mx-4 white--text" href="https://t.me/ghosteshop" icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
            <path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" fill="currentColor"/>
          </svg>
        </v-btn>
        <v-btn class="mx-4 white--text" href="https://twitter.com/GhosteShop" icon>
          <v-icon size="24px"> mdi-twitter </v-icon>
        </v-btn>
        <v-btn class="mx-4 white--text" href="https://www.reddit.com/r/ghosteshop/" icon>
          <v-icon size="24px"> mdi-reddit </v-icon>
        </v-btn>
        <v-btn class="mx-4 white--text" href="https://github.com/ghost-land" icon>
          <v-icon size="24px"> mdi-github </v-icon>
        </v-btn>
        <v-btn class="mx-4 white--text" href="https://ghosteshop.com/feed/news.xml" icon>
          <v-icon size="24px"> mdi-rss </v-icon>
        </v-btn>
        <v-btn class="mx-4 white--text" href="https://wiki.ghosteshop.com/" icon>
          <v-icon size="24px"> mdi-book-open-page-variant </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider dark></v-divider>

      <v-card-text class="white--text">
        {{ $t('footer.copyright') }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {}
</script>

<style scopped>
.footer {
  width: 100% !important;
}
</style>
