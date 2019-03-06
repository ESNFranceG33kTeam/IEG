<template>
  <div :class="$style.vueFooter">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item>
          <small>&copy; Copyright {{year}} /  G33K Team - ESN France</small>
        </vue-grid-item>

        <vue-grid-item>
          <a href="https://esn.org/" target="_blank" rel="noopener">
            <img src="/esnlogo.png" alt="Erasmus Student Network International logo" style="max-width:100px;margin-right:16px;"/>
          </a>
          <a href="https://www.facebook.com/InternationalErasmusGames/" target="_blank" rel="noopener" aria-label="facebook page">
            <vue-icon-facebook />
          </a>
          <a href="https://www.instagram.com/internationalerasmusgames/" target="_blank" rel="noopener" aria-label="instagram profile">
            <vue-icon-instagram />
          </a>
        </vue-grid-item>

      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid              from '../VueGrid/VueGrid.vue';
  import VueGridItem          from '../VueGridItem/VueGridItem.vue';
  import VueGridRow           from '../VueGridRow/VueGridRow.vue';
  import VueIconFacebook      from "../icons/VueIconFacebook/VueIconFacebook.vue";
  import VueIconInstagram     from "../icons/VueIconInstagram/VueIconInstagram.vue";

  export default {
    name:       'VueFooter',
    components: {
      VueGrid,
      VueGridItem,
      VueGridRow,
      VueIconFacebook,
      VueIconInstagram
    },
    computed:   {
      year() {
        return new Date().getFullYear();
      },
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueFooter {
    padding:    $footer-padding;
    background: $footer-bg;
    color:      $footer-color;
    text-align: center;

    i {
      height: $font-size-h1;
      width:  $font-size-h1;
      fill:   $brand-accent;
      margin: 0 $space-unit * 2;
    }

    small {
      display: inline-block;
      margin:  $space-unit * 2 0;
    }
  }
</style>
