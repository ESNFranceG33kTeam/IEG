<template>
  <div :class="$style.home">
    <stage
      :disable-particles="disableParticles" />
    <countdown />
    <welcome />
  </div>
</template>

<script lang="ts">
  import { mapState }    from 'vuex';
  import Stage           from '../Stage/Stage.vue';
  import Countdown       from '../Countdown/Countdown.vue';
  import Welcome from '../Welcome/Welcome.vue';
  import { IState }      from '../../state';

  export default {
    metaInfo:   {
      title: 'International Erasmus Games 2019: Paris',
      meta:  [
        {
          name:    'description',
          content: 'IEG - the official website of the International Erasmus Games.',
        },
        {
          name:    'robots',
          content: 'INDEX,FOLLOW',
        },
        {
          name:    'keywords',
          content: 'ieg, sports, ESN, ESNParis, #IEGParis2019',
        },

        { name: 'og:url', content: 'https://iegparis2019.com/' },
        { name: 'og:site_name', content: 'IEG Paris 2019' },
        { name: 'og:type', content: 'website' },
        { name: 'og:locale', content: 'en' },
        {
          name:    'og:title',
          content: 'IEG - the official website of the International Erasmus Games.',
        },
        {
          name:    'og:description',
          content: 'IEG - the official website of the International Erasmus Games.',
        },
        { name: 'og:image:url', content: 'http://79.137.105.43/full_logo.png' },
      ],
    },
    components: {
      Stage,
      Countdown,
      Welcome,
    },
    computed:   {
      ...mapState({
                    disableParticles: (state: IState) => state.app.config && state.app.config.features.disableParticles,
                  }),
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .home {
    h2 {
      text-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
    }

    :global {
      .vuePanel {
        height: 100%;
      }

      .vueGridItem {
        margin-bottom: $space-unit * 2;
      }

      .featureSection {
        padding: 0;
      }
    }

    @include media(tabletLandscape) {
      :global {
        .featureSection {
          padding: $space-unit * 15 0;
        }
      }
    }
  }
</style>
