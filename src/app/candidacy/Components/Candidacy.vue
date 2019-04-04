<template>
  <div :class="$style.components">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <h1>{{ $t('App.nav.candidacy') }}</h1>
            <p>
                {{ $t('Candidacy.subtitle1') }}
            </p>
              <p>
                  {{ $t('Candidacy.subtitle2') }}
              </p>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>

    <vue-grid>

      <vue-grid-row>
          <vue-grid-item class="vueGridItem">
              <h2>{{ $t('Candidacy.disability.title') }}</h2>

              <vue-panel>
                  <vue-panel-body>
                      <img :class="$style.imgRight" src="/candidacy/way.png" :alt="this.$t('Candidacy.disability.image')"/>
                      {{ $t('Candidacy.disability.text1') }}<strong>{{ $t('Candidacy.disability.text2') }}</strong>{{ $t('Candidacy.disability.text3') }}<strong>{{ $t('Candidacy.disability.text4') }}</strong>{{ $t('Candidacy.disability.text5') }}
                  </vue-panel-body>
              </vue-panel>
          </vue-grid-item>
      </vue-grid-row>

        <vue-grid-row>
            <vue-grid-item class="vueGridItem">
                <h2>{{ $t('Candidacy.sustainability.title') }}</h2>

                <vue-panel>
                    <vue-panel-body>
                        {{ $t('Candidacy.sustainability.text1') }} <strong>{{ $t('Candidacy.sustainability.text2') }}</strong>{{ $t('Candidacy.sustainability.text3') }}
                        <strong>{{ $t('Candidacy.sustainability.text4') }}</strong> {{ $t('Candidacy.sustainability.text5') }}
                        <strong>{{ $t('Candidacy.sustainability.text6') }}</strong> {{ $t('Candidacy.sustainability.text7') }}
                        <strong>{{ $t('Candidacy.sustainability.text8') }}</strong>.<br/>
                        {{ $t('Candidacy.sustainability.text9') }}
                    </vue-panel-body>
                </vue-panel>
            </vue-grid-item>
        </vue-grid-row>

        <vue-grid-row>
            <vue-grid-item class="vueGridItem">
                <h2>{{ $t('Candidacy.sport.title') }}</h2>

                <vue-panel>
                    <vue-panel-body>
                        {{ $t('Candidacy.sport.text1') }}<br/>
                        {{ $t('Candidacy.sport.text2') }} <strong>{{ $t('Candidacy.sport.text3') }}</strong>
                        {{ $t('Candidacy.sport.text4') }} <strong>{{ $t('Candidacy.sport.text5') }}</strong>{{ $t('Candidacy.sport.text6') }}
                    </vue-panel-body>
                </vue-panel>
            </vue-grid-item>
        </vue-grid-row>

        <vue-grid-row>
            <vue-grid-item class="vueGridItem">
                <h2>{{ $t('Candidacy.openness.title') }}</h2>

                <vue-panel>
                    <vue-panel-body style="display: flow-root">
                        <img :class="$style.imgRight" src="/candidacy/flag.png" :alt="this.$t('Candidacy.openness.image')"/>
                        {{ $t('Candidacy.openness.text1') }} <strong>{{ $t('Candidacy.openness.text2') }}</strong>{{ $t('Candidacy.openness.text3') }}
                        <strong>{{ $t('Candidacy.openness.text4') }}</strong>.<br/>
                        {{ $t('Candidacy.openness.text5') }}
                    </vue-panel-body>
                </vue-panel>
            </vue-grid-item>
        </vue-grid-row>

    </vue-grid>

      <h3></h3>
  </div>
</template>

<script lang="ts">
    import VueGrid                                          from '../../shared/components/VueGrid/VueGrid.vue';
    import VueGridItem                                      from '../../shared/components/VueGridItem/VueGridItem.vue';
    import VuePanel                                         from '../../shared/components/VuePanel/VuePanel.vue';
    import VuePanelHeader
        from '../../shared/components/VuePanel/VuePanelHeader/VuePanelHeader.vue';
    import VuePanelBody
        from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
    import VuePanelFooter
        from '../../shared/components/VuePanel/VuePanelFooter/VuePanelFooter.vue';
    import VueGridRow                                       from '../../shared/components/VueGridRow/VueGridRow.vue';

    export default {
        metaInfo:   {
            title: 'IEG2019 - Candidacy',
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
            VueGrid,
            VueGridItem,
            VuePanel,
            VuePanelHeader,
            VuePanelBody,
            VuePanelFooter,
            VueGridRow,
        }
    };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .components {
    padding-bottom: $space-unit * 2;

    :global {
      h2 {
        margin-top: 3.6rem;
      }

      .vueGridItem {
        min-width: 46%;
      }
    }
  }

  .header {
    padding:     $nav-bar-height 0 $nav-bar-height * 0.5;
    text-align:  center;
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
    @include background-gradient($brand-dark-primary, $brand-accent, 152deg);
  }

  .collapseDemo {
    padding:    $space-unit * 2;
    background: $panel-bg;
    box-shadow: $panel-shadow;
    color:      #FFF
  }

  .age {
    > div {
      height:     $space-unit;
      background: $brand-accent;
      margin-top: $space-unit * 1.5;
      display:    inline-block;
    }

    > span {
      font-size:   $font-size - 0.4;
      display:     inline-block;
      margin-left: $space-unit;
    }
  }
</style>
