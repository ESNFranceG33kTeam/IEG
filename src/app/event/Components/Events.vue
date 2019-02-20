<template>
  <div :class="$style.components">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <h1>{{ $t('App.nav.events' /* Events */) }}</h1>
            <p>
              What are the IEG ? Why Paris ?
            </p>
            <p>
              You will find your answers here.
            </p>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>

    <vue-grid>
      <vue-grid-row>

          <vue-grid-item class="vueGridItem">
              <h2>What are the IEG ?</h2>

              <vue-panel>
                  <vue-panel-body>
                      International Erasmus Games (IEG) is a sport event of <b>Erasmus Student Network</b> organised by a local
                      section of the network.<br/>
                      Every year, ESN members and international students (representing their host country) are gathered
                      for a unique competition.<h3></h3>
                      <h4>The aims:</h4>

                      <ul>
                          <li>Promote <strong>healthy and active lifestyle</strong> among the Network and students around
                              Europe</li>
                          <li>Raise <strong>awareness</strong> about health & well-being, social inclusion and integration</li>
                          <li>Introduce and support a way of connecting students with their <strong>local community</strong>
                              and volunteering in sport</li>
                          <li>Support countries and sections in organising <strong>sports activities</strong> and events</li>
                          <li>Initiate <strong>challenges</strong> and activities</li>
                      </ul>
                      <h3></h3>
                      International Erasmus Games include three main sport disciplines: Football, Basketball, and Volleyball,
                      and a fourth sport chosen by the organising section. This year, it will be Athletism!
                      <router-link to="/sports">More details here.</router-link>

                      <h3></h3>
                      <a href="https://ieg.esn.org/" target="_blank">Want to know more about the IEG ? Discover the
                          official website from ESN international.</a>
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
                <h2>Why Paris ?</h2>

                <vue-panel>
                    <vue-panel-body>
                        ESN Paris wishes to echo the coming <strong>Olympic Games of Paris 2024</strong> and the
                        <strong>Rugby WorldCup Paris 2023.</strong>
                        Paris is a city firmly involved in sports and international events. The International Erasmus
                        Games are a great opportunity for ESN Paris and ESN France to reach out to european partners by
                        organizing an <strong>ambitious and federative event</strong> !<h3></h3>

                        This competition will be a great moment to bring forward Paris' values of <strong>welcoming</strong>,
                        <strong>integration</strong> and <strong>sports</strong>, but also values that import
                        us as a local community : <strong>access to sports for everyone, well-being and sustainability</strong>.
                        <router-link to="/candidacy">Click to discover more about our values !</router-link>

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
                <h2>Program</h2>

                <vue-panel>
                    <vue-panel-body>
                        IEG Paris will occur from May 2nd to 5th, 2019.<br/>
                        Stay put, the full program will soon be released !
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
          { name: 'og:image:url', content: 'https://iegparis2019.com/favicon-96x96.png' },
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
