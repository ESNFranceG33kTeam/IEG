<template>
  <div :class="$style.components">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <h1>{{ $t('App.nav.events' /* Events */) }}</h1>
            <p>
              {{ $t('Event.subtitle1') }}
            </p>
            <p>
              {{ $t('Event.subtitle2') }}
            </p>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>

    <vue-grid>
      <vue-grid-row>

          <vue-grid-item class="vueGridItem">
              <h2>{{ $t('Event.ieg.title') }}</h2>

              <vue-panel>
                  <vue-panel-body>
                      {{ $t('Event.ieg.text1') }} <b>Erasmus Student Network</b> {{ $t('Event.ieg.text2') }}<br/>
                      {{ $t('Event.ieg.text3') }}<h3></h3>
                      <h4>{{ $t('Event.ieg.aims') }}</h4>

                      <ul>
                          <li>{{ $t('Event.ieg.aim1.text1') }} <strong>{{ $t('Event.ieg.aim1.text2') }}</strong>
                              {{ $t('Event.ieg.aim1.text3') }}</li>
                          <li>{{ $t('Event.ieg.aim2.text1') }} <strong>{{ $t('Event.ieg.aim2.text2') }}</strong>
                              {{ $t('Event.ieg.aim2.text3') }}</li>
                          <li>{{ $t('Event.ieg.aim3.text1') }} <strong>{{ $t('Event.ieg.aim3.text2') }}</strong>
                              {{ $t('Event.ieg.aim3.text3') }}</li>
                          <li>{{ $t('Event.ieg.aim4.text1') }} <strong>{{ $t('Event.ieg.aim4.text2') }}</strong>
                              {{ $t('Event.ieg.aim4.text3') }}</li>
                          <li>{{ $t('Event.ieg.aim5.text1') }} <strong>{{ $t('Event.ieg.aim5.text2') }}</strong>
                              {{ $t('Event.ieg.aim5.text3') }}</li>
                      </ul>
                      <h3></h3>
                      {{ $t('Event.ieg.text4') }}
                      <router-link to="/sports">{{ $t('Event.ieg.details') }}</router-link>

                      <h3></h3>
                      <a href="https://ieg.esn.org/" target="_blank">{{ $t('Event.ieg.website') }}</a>
                      <!--
                      <h3></h3>
                      The previous editions of IEG were organized by :
                      <ul>
                          <li>Cracow, Poland (2015)</li>
                          <li>Milan, Italy (2016)</li>
                          <li>Porto, Portugal (2017)</li>
                          <li>Niš, Serbia (2018)</li>
                      </ul>
                      -->
                  </vue-panel-body>
              </vue-panel>
          </vue-grid-item>

      </vue-grid-row>

        <vue-grid-row>

            <vue-grid-item class="vueGridItem">
                <h3 style="text-align:center">In 2019, Paris has been chosen to host the fifth IEG !</h3>
                <h2>{{ $t('Event.paris.title') }}</h2>

                <vue-panel>
                    <vue-panel-body>
                        {{ $t('Event.paris.text1') }} <strong>{{ $t('Event.paris.text2') }}</strong> {{ $t('Event.paris.text3') }}
                        <strong>{{ $t('Event.paris.text4') }}</strong>.
                        {{ $t('Event.paris.text5') }} <strong>{{ $t('Event.paris.text6') }}</strong> !<h3></h3>

                        {{ $t('Event.paris.text7') }} <strong>{{ $t('Event.paris.text8') }} </strong> {{ $t('Event.paris.text9') }}
                        <strong>{{ $t('Event.paris.text10') }}</strong>{{ $t('Event.paris.text11') }}
                        <strong>{{ $t('Event.paris.text12') }}</strong>.
                        <router-link to="/candidacy">{{ $t('Event.paris.values') }}</router-link>

                        <!--
                        For the very first time in France and in Paris, one of the greatest european realisations, the
                        <strong>Erasmus+ Programme</strong>, will be brought forward through a sport tournament on an international
                        dimension. It is a unique occasion, never a capital city like Paris has welcomed those games. It
                        is a chance for ESN Paris to bring the IEG to a new level, thanks to an important communication
                        and mediatisation. The city will have the possibility to bring into view its values of
                        <strong>welcoming, integration, and sports</strong>.<h3></h3>

                        The initiative is actively supported by all the associations that compose the network of ESN in
                        France for the organisation of IEG Paris, thus participates in the whole network animation.
                        Volunteers from all 36 associations will join the OC to make this event a national project.<h3></h3>

                        Finally, this competition will also be a great moment to bring forward values that import us :
                        <strong>sports for everyone, well-being and sustainability.</strong><h3></h3>

                        <router-link to="/candidacy">Click here to discover more about our values!</router-link>
                        -->
                    </vue-panel-body>
                </vue-panel>
            </vue-grid-item>

        </vue-grid-row>

        <vue-grid-row>

            <vue-grid-item class="vueGridItem">
                <h2>{{ $t('Event.program.title') }}</h2>

                <!--
                <vue-panel>
                    <vue-panel-body>
                        {{ $t('Event.program.text1') }}<br/>
                        {{ $t('Event.program.text2') }}
                    </vue-panel-body>
                </vue-panel>-->

                <vue-grid-row>
                    <vue-grid-item class="vueGridItem">
                        <h3></h3>
                        <vue-panel>
                            <vue-panel-body style="display: flow-root">
                                <a target="_blank" href="https://www.facebook.com/events/439579436794253/">
                                    <img style="width:100%" src="/event/forum.png" alt="assas logo"/>
                                </a>
                            </vue-panel-body>
                        </vue-panel>
                    </vue-grid-item>

                    <vue-grid-item>
                        <h3></h3>
                        <vue-panel>
                            <vue-panel-body style="display: flow-root">
                                <a target="_blank" href="https://www.facebook.com/events/632225497221235/">
                                    <img style="width:100%" src="/event/boat.png" alt="eurosender logo"/>
                                </a>
                            </vue-panel-body>
                        </vue-panel>
                    </vue-grid-item>
                </vue-grid-row>

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

  export default {
    metaInfo:   {
      title: 'IEG2019 - Event',
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
