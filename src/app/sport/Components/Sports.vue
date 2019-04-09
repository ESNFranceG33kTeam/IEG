<template>
  <div :class="$style.components">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <h1>{{ $t('App.nav.sport') }}</h1>
            <p>
              Here are some info about the sport and stadium!
            </p>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>

    <vue-grid>
      <vue-grid-row>

          <vue-grid-item class="vueGridItem">
              <h2>{{ $t('Sports.athletics.title') }}</h2>

              <vue-panel>
                  <vue-panel-body>

                      {{ $t('Sports.athletics.text1') }}
                      <ul>
                          <li>{{ $t('Sports.athletics.item1') }}</li>
                          <li>{{ $t('Sports.athletics.item2') }}</li>
                          <li>{{ $t('Sports.athletics.item3') }}</li>
                          <li>{{ $t('Sports.athletics.item4') }}</li>
                      </ul>
                      <h3></h3>

                      <!--
                      The idea is that there is a team representing each country that is composed by 3 men and 3 womens.
                      There will be one reprensentant per tria and per genderl (1 man for the 100m, 1 woman for the 100m,
                      1 man for the 400m etc.).
                      To complete all that, a relay will gather the 6 membres of the team.
                       -->
                      {{ $t('Sports.athletics.text2') }}<br/>
                      {{ $t('Sports.athletics.text3') }}<h3></h3>

                      {{ $t('Sports.athletics.text4') }}

                      <h3></h3>
                      <a target="_blank"
                         href="/sports/rulebook.pdf">
                         <!-- "https://docs.google.com/document/d/1cV2J3VAVdz-5t9wIbIlxav9-yXGNTfRKt2-uTucEJsw/edit?fbclid=IwAR1eomz3BZKu9jAkfDRQOim2ge2RBz9nSMYYXkXV9nLHqOdso4BlSenQ4pI" -->
                          {{ $t('Sports.athletics.rulebook') }}
                      </a>
                  </vue-panel-body>
              </vue-panel>
          </vue-grid-item>

      </vue-grid-row>

        <vue-grid-row>

            <vue-grid-item class="vueGridItem">
                <h2>{{ $t('Sports.facility.title') }}</h2>

                <vue-panel>
                    <vue-panel-body>
                        <p>
                            {{ $t('Sports.facility.text') }}
                        </p>
                        <h3></h3>

                        <vue-carousel :images="images" />

                    </vue-panel-body>
                </vue-panel>
            </vue-grid-item>

        </vue-grid-row>

        <h2></h2>
    </vue-grid>
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
  import VueCarousel from "../../shared/components/VueCarousel/VueCarousel.vue";

  export default {
    metaInfo:   {
      title: 'IEG2019 - Sports',
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
      VueCarousel
    },
      data(): any {
          return {
              images:              [
                  {
                      alt:       'Vue du stade',
                      copyright: 'airparif.asso.fr',
                      url:       'https://www.airparif.asso.fr/_img/actu/station-stade-suzanne-lenglen.jpg',
                  },
                  {
                      alt:       'Vue de la piste d\'athlétisme',
                      copyright: 'jogin.fr',
                      url:       'https://image.jimcdn.com/app/cms/image/transf/none/path/s2ec71e188a148881/image/i1a0286688ddbf7c6/version/1400426476/image.jpg',
                  }
              ]
          };
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

    ul {
        list-style: circle;
        margin-left: 20px;
    }
</style>
