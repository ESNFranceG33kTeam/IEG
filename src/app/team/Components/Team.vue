<template>
  <div :class="$style.components">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <h1>{{ $t('App.nav.team') }}</h1>
            <p>
              {{ $t('Team.subtitle1') }}
            </p>
            <p>
              {{ $t('Team.subtitle2') }}
            </p>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>

    <vue-grid>

      <vue-grid-row>

        <vue-grid-item class="vueGridItem">
          <h3></h3>

          <vue-panel>
            <vue-panel-header title="Julien Guillot" :subtitle="this.$t('Team.julien.status')"
                              image="/team/people/julien.jpg" />
            <vue-panel-body>
              <ul>
                <li>{{ $t('Team.julien.item1') }}</li>
                <li>{{ $t('Team.julien.item2') }}</li>
              </ul>

            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h3></h3>
          <vue-panel>
            <vue-panel-header title="Julie Nevant" :subtitle="this.$t('Team.julie.status')"
                              image="/team/people/julie.jpg" />
            <vue-panel-body>
              <ul>
                <li>{{ $t('Team.julie.item1') }}</li>
                <li>{{ $t('Team.julie.item2') }}</li>
              </ul>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h3></h3>
          <vue-panel>
            <vue-panel-header title="Orane Maquin" :subtitle="this.$t('Team.orane.status')"
                              image="/team/people/orane.jpg" />
            <vue-panel-body>
              <ul>
                <li>{{ $t('Team.orane.item1') }}</li>
                <li>{{ $t('Team.orane.item2') }}</li>
                <li>{{ $t('Team.orane.item3') }}</li>
              </ul>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h3></h3>
          <vue-panel>
            <vue-panel-header title="Damon Singleton" :subtitle="this.$t('Team.damon.status')"
                              image="/team/people/damon.jpg" />
            <vue-panel-body>
              <ul>
                <li>{{ $t('Team.damon.item1') }}</li>
                <li>{{ $t('Team.damon.item2') }}</li>
              </ul>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h3></h3>
          <h3></h3>
          <vue-panel>
            <vue-panel-header title="Samia Hanki" :subtitle="this.$t('Team.samia.status')" image="/team/people/samia.jpg" />
            <vue-panel-body>
              <ul>
                <li>{{ $t('Team.samia.item1') }}</li>
              </ul>
            </vue-panel-body>
          </vue-panel>
          <h3></h3>
          <vue-panel>
            <vue-panel-header title="Rémy Raes" :subtitle="this.$t('Team.remy.status')"
                              image="/team/people/remy.jpg" />
            <vue-panel-body>
              <ul>
                <li>{{ $t('Team.remy.item1') }}</li>
                <li>{{ $t('Team.remy.item2') }}</li>
                <li>{{ $t('Team.remy.item3') }}</li>
              </ul>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h3></h3>
          <vue-panel>
            <vue-panel-header style="color:#f47b20" :title="this.$t('Team.partners.title')" />
            <vue-panel-body>
              <vue-panel-header :class="$style.noHighlight" title="Yassine Berrada" :subtitle="this.$t('Team.partners.yassine')" image="/team/people/yacine.jpg" />
              <vue-panel-header :class="$style.noHighlight" title="Fadile Bhayat" :subtitle="this.$t('Team.partners.fadile')" image="/team/people/fadile.jpg" />
              <vue-panel-header :class="$style.noHighlight" title="Baptiste Poujol" :subtitle="this.$t('Team.partners.baptiste')" image="/team/people/baptiste.jpg" />
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>

      <!--
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h3></h3>

        </vue-grid-item>
      </vue-grid-row>
-->

      <vue-grid-row>
        <vue-grid-item>
          <h2>{{ $t('Team.ieg.title') }}</h2>
          <vue-panel>
            <vue-panel-body style="display: flow-root;">
              <img :class="$style.imgLeft" src="/team/committee.png" :alt="this.$t('Team.ieg.image')"/>
              <p>
                {{ $t('Team.ieg.text1') }} <strong>Aleksandra Seweryn</strong> {{ $t('Team.ieg.text2') }} <strong>Hrvoje Grganovic</strong>
                {{ $t('Team.ieg.text3') }} <strong>Zrinka Trusic</strong> {{ $t('Team.ieg.text4') }}
              </p>
            </vue-panel-body>
          </vue-panel>

        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item>
          <h2>Erasmus Student Network</h2>
          <vue-panel>
            <vue-panel-body style="display:flow-root">
              <!--<img :class="$style.imgLeft" alt="esn logo" src="/team/esnlogo.png"/>-->
              <img :class="$style.imgLeft" :alt="this.$t('Team.esn.image')" src="/team/esn.png"/>
              <p>
                {{ $t('Team.esn.text1') }} <strong>{{ $t('Team.esn.text2') }}</strong> {{ $t('Team.esn.text3') }}
                <strong>1989</strong>{{ $t('Team.esn.text5') }} <strong>39</strong> {{ $t('Team.esn.text6') }}
                <strong>{{ $t('Team.esn.text7') }}</strong> {{ $t('Team.esn.text8') }}
                <strong>{{ $t('Team.esn.text9') }}</strong>, {{ $t('Team.esn.text10') }}
              </p>

              <!--
              <h3></h3>
              <iframe src="https://www.youtube.com/embed/WQ071yzhUxI" width="100%"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen :class="$style.imgLeft"></iframe>
                      -->

            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item>
          <h2>ESN Paris</h2>
          <vue-panel>
            <vue-panel-body style="display: flow-root">
              <!-- <img :class="$style.imgLeft" src="/team/esnparis_logo.png" alt="ESN Paris logo" /> -->
              <img :class="$style.imgLeft" src="/team/esnparis.png" :alt="this.$t('Team.paris.image')" />
              <p>
                {{ $t('Team.paris.text1') }} <strong>{{ $t('Team.paris.text2') }}</strong>
                {{ $t('Team.paris.text3') }} <strong>{{ $t('Team.paris.text4') }}</strong>
                {{ $t('Team.paris.text5') }} <br/><strong>{{ $t('Team.paris.text6') }}</strong>,
                {{ $t('Team.paris.text7') }}
              </p>
            </vue-panel-body>
          </vue-panel>

        </vue-grid-item>
      </vue-grid-row>
      <h3></h3>

    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid                                          from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem                                      from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueButton                                        from '../../shared/components/VueButton/VueButton.vue';
  import VueLoader                                        from '../../shared/components/VueLoader/VueLoader.vue';
  import VuePanel                                         from '../../shared/components/VuePanel/VuePanel.vue';
  import VuePanelHeader
                                                          from '../../shared/components/VuePanel/VuePanelHeader/VuePanelHeader.vue';
  import VuePanelBody
                                                          from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
  import VuePanelFooter
                                                          from '../../shared/components/VuePanel/VuePanelFooter/VuePanelFooter.vue';
  import VueInput                                         from '../../shared/components/VueInput/VueInput.vue';
  import VueCollapse                                      from '../../shared/components/VueCollapse/VueCollapse.vue';
  import VueModal                                         from '../../shared/components/VueModal/VueModal.vue';
  import VueTabGroup                                      from '../../shared/components/VueTabGroup/VueTabGroup.vue';
  import VueTabItem
                                                          from '../../shared/components/VueTabGroup/VueTabItem/VueTabItem.vue';
  import VueCheckbox                                      from '../../shared/components/VueCheckbox/VueCheckbox.vue';
  import VueTooltip                                       from '../../shared/components/VueTooltip/VueTooltip.vue';
  import VueSlider                                        from '../../shared/components/VueSlider/VueSlider.vue';
  import VueAccordion                                     from '../../shared/components/VueAccordion/VueAccordion.vue';
  import VueAccordionItem
                                                          from '../../shared/components/VueAccordion/VueAccordionItem/VueAccordionItem.vue';
  import VuePagination
                                                          from '../../shared/components/VuePagination/VuePagination.vue';
  import VueSelect                                        from '../../shared/components/VueSelect/VueSelect.vue';
  import VueCalendar                                      from '../../shared/components/VueCalendar/VueCalendar.vue';
  import VueDatePicker
                                                          from '../../shared/components/VueDatePicker/VueDatePicker.vue';
  import VueDateRangePicker
                                                          from '../../shared/components/VueDateRangePicker/VueDateRangePicker.vue';
  import { addNotification, INotification }               from '../../shared/components/VueNotificationStack/utils';
  import VueMarkdown                                      from '../../shared/components/VueMarkdown/VueMarkdown.vue';
  import VueGridRow                                       from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueAutocomplete
                                                          from '../../shared/components/VueAutocomplete/VueAutocomplete.vue';
  import { AutocompleteOptionsFixture }                   from '../../shared/components/VueAutocomplete/fixtures/IAutocompleteFixture';
  import VueBadge                                         from '../../shared/components/VueBadge/VueBadge.vue';
  import { IAutocompleteOption }                          from '../../shared/components/VueAutocomplete/IAutocompleteOption';
  import VueTruncate                                      from '../../shared/components/VueTruncate/VueTruncate.vue';
  import VueCarousel                                      from '../../shared/components/VueCarousel/VueCarousel.vue';
  import VueDataTable                                     from '../../shared/components/VueDataTable/VueDataTable.vue';
  import { dataTableDataFixture, dataTableHeaderFixture } from '../../shared/components/VueDataTable/DataTableFixtures';
  import VueToggle                                        from '../../shared/components/VueToggle/VueToggle.vue';
  import VueBreadcrumb
                                                          from '../../shared/components/VueBreadcrumb/VueBreadcrumb.vue';

  export default {
    metaInfo:   {
      title: 'IEG2019 - Team',
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
      VueCarousel,
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
