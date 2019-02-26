<template>
  <div :class="$style.components">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <h1>{{ $t('App.nav.candidacy') }}</h1>
            <p>
                ESN Paris wishes to participate in the development of a sports project for international students.
            </p>
              <p>
                The aim is to create throughout their stay, an event vector of profound and sustainable values, in
                several domains such as health, well-being, social inclusion, education, solidarity and the respect of
                the environment.
              </p>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>

    <vue-grid>

      <vue-grid-row>
          <vue-grid-item class="vueGridItem">
              <h2>Disability: Sports for everyone</h2>

              <vue-panel>
                  <vue-panel-body>
                      <img :class="$style.imgRight" src="/candidacy/way.png" alt="a student with a wheelchair"/>
                      The main topics of these IEG will be “<strong>sports for everyone</strong>” and
                      “<strong>Handisport</strong>”. With displays for disability open to all local people during the
                      weekend, we want to show that being in a handicap situation is not a fatality, and that a sport
                      activity can be practiced in high level. With the presence of handisport champions during the whole
                      competition, the topic of handicap will be present during the 3 days of the event, and we hope that
                      we will be able to raise awareness on this matter. Finally, we want to shed the light on the work
                      provided by many volunteers during the whole year, and that echoes only during the paralympic games,
                      once every four years. Handisport was our priority when we applied and it will be at the heart of
                      the project.
                  </vue-panel-body>
              </vue-panel>
          </vue-grid-item>
      </vue-grid-row>

        <vue-grid-row>
            <vue-grid-item class="vueGridItem">
                <h2>Sustainability</h2>

                <vue-panel>
                    <vue-panel-body>
                        As young European citizens, it is our duty to take part in the commitments for a better future.
                        The United Nations and European Union have adopted <strong>17 sustainable development
                        goals</strong>, and ESN international has targeted <strong>6 causes</strong> to support. It is
                        in this perspective of enhancing the importance of <strong>health and well-being</strong> that
                        the IEG have been created among ESN. Hence, we consider it our mission to make it an outstanding
                        example of a <strong>sustainable engaging event</strong>.
                        As much as possible, we are encouraging all of our participants and volunteers to be the most
                        environnement respectful : to conserve water, to reduce packing materials, to reduce use of
                        plastic and paper, to limit transportation, to recycle and limit waste.
                    </vue-panel-body>
                </vue-panel>
            </vue-grid-item>
        </vue-grid-row>

        <vue-grid-row>
            <vue-grid-item class="vueGridItem">
                <h2>Sports on exchanges</h2>

                <vue-panel>
                    <vue-panel-body>
                        Sport is often an issue during an international stay or an Erasmus exchange. Would we have enough
                        time to practise a sport ? Who should I contact ? What to do ?<br/>
                        Through an <strong>exhibition</strong> of several organisations, we are going to show that it is
                        possible to stay in shape even abroad. Key point of the Erasmus+ programme, sport is also a way to
                        <strong>fight against intolerance and discrimination</strong>, two topics our organisation really
                        cares about.
                    </vue-panel-body>
                </vue-panel>
            </vue-grid-item>
        </vue-grid-row>

        <vue-grid-row>
            <vue-grid-item class="vueGridItem">
                <h2>European openness</h2>

                <vue-panel>
                    <vue-panel-body style="display: flow-root">
                        <img :class="$style.imgRight" src="/candidacy/flag.png" alt="students raising flags from all european countries"/>
                        The European question will also be at the heart of the year 2019 with elections coming by May and
                        Brexit. For the first time in France and in Paris, one of the greatest European creations,
                        <strong>the Erasmus+ programme</strong>, will be brought to light by a sport competition at an
                        international level. Through this event, our goal is to show that there aren’t citizens from
                        different European countries but <strong>ONE European citizenship defined by common values</strong>.
                        Is there a better way than sport to gather people? In France, founding country of Europe, it is
                        an important message to raise.
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
