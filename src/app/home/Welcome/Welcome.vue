<template>
  <div :class="[$style.welcome, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h2>Welcome!</h2>
        </vue-grid-item>
        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <vue-icon-hashtag />
              <h3>IEG? What's that?</h3>
              <p>The International Erasmus Games are a sport event of <strong>Erasmus Student Network</strong>, gathering international
                students for an unique competition.</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <vue-icon-hashtag />
              <h3>Wanna come?</h3>
              <p>Don't hesitate to consult our "Participants" tab, but also the program of the event, which is inside
                the "event" one!</p>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <vue-icon-hashtag />
              <h3>Contact us!</h3>
              <p>In case you have any problem, any question, please do not hesitate to reach us there: </p>
              <a href="mailto:ieg@esnparis.com">ieg@esnparis.com</a>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
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
  import VueIconHashtag     from "../../shared/components/icons/VueIconHashtag/VueIconHashtag.vue";

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
      VueIconHashtag
    },
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
