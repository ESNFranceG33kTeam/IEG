<template>
  <div :class="[$style.welcome, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h2>{{ $t('Home.welcome') }}</h2>
        </vue-grid-item>
        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <vue-icon-i-e-g />
              <h3>{{ $t('Home.tile.ieg.title') }}</h3>
              <p>{{ $t('Home.tile.ieg.text1') }} <strong>{{ $t('App.general.esn') }}</strong>{{ $t('Home.tile.ieg.text2') }}</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <vue-icon-wanna />
              <h3>{{ $t('Home.tile.come.title') }}</h3>
              <p>{{ $t('Home.tile.come.text') }}</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <vue-icon-mail />
              <h3>{{ $t('Home.tile.contact.title') }}</h3>
              <p>{{ $t('Home.tile.contact.text') }}</p>
              <a href="mailto:ieg@esnparis.com">{{ $t('Home.tile.contact.address') }}</a>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
          <vue-button
                  style="margin: 50px auto 20px auto" @click="redirect"
          >{{ $t('Home.aboutLink') }}</vue-button>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid            from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem        from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VuePanel           from '../../shared/components/VuePanel/VuePanel.vue';
  import VuePanelBody       from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
  import VueGridRow         from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueIconChartLine   from '../../shared/components/icons/VueIconChartLine/VueIconChartLine.vue';
  import VueIconCertificate from '../../shared/components/icons/VueIconCertificate/VueIconCertificate.vue';
  import VueIconFlag        from '../../shared/components/icons/VueIconFlag/VueIconFlag.vue';
  import VueIconMail from "../../shared/components/icons/VueIconMail/VueIconMail.vue";
  import VueIconWanna from "../../shared/components/icons/VueIconWanna/VueIconWanna.vue";
  import VueIconIEG from "../../shared/components/icons/VueIconIEG/VueIconIEG.vue";
  import VueButton from "../../shared/components/VueButton/VueButton.vue";

  export default {
    components: {
      VueIconFlag,
      VueIconCertificate,
      VueIconChartLine,
      VueGrid,
      VueGridItem,
      VuePanel,
      VuePanelBody,
      VueGridRow,
      VueIconMail,
      VueIconWanna,
      VueIconIEG,
      VueButton
    },
      methods: {
        redirect() {
            window.open('https://ieg.esn.org', '_blank');
        }
      }
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .welcome {
    display:    block;
    text-align: center;

    i {
      display:    inline-block;
      height:     $font-size-h1;
      width:      $font-size-h1;
      margin-top: $space-unit;
    }

    @include background-gradient($brand-accent, $brand-light-primary, -135deg);
  }
</style>
