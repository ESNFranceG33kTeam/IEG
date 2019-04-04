<template>
  <div :class="$style.components">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <h1>{{ $t('App.nav.partners') }}</h1>
            <p>
              {{ $t('Partners.subtitle') }}
            </p>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>

    <vue-grid>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>{{ $t('Partners.rp.title') }}</h2>

          <vue-panel>
            <vue-panel-body>
              <img :class="$style.imgRight" src="/partners/rp.png" :alt="this.$t('Partners.rp.image')"/>
              {{ $t('Partners.rp.text1') }} <strong>{{ $t('Partners.rp.text2') }}</strong>
              {{ $t('Partners.rp.text3') }} <strong>{{ $t('Partners.rp.text4') }}</strong>
              <h3></h3>
              {{ $t('Partners.rp.text5') }} <strong>{{ $t('Partners.rp.text6') }}</strong>
              {{ $t('Partners.rp.text7') }}
              <h3></h3>
              {{ $t('Partners.rp.aims') }}
              <ul>
                <li>{{ $t('Partners.rp.item1') }}</li>
                <li>{{ $t('Partners.rp.item2') }}</li>
              </ul>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>{{ $t('Partners.town.title') }}</h2>

          <vue-panel>
            <vue-panel-body>
              {{ $t('Partners.town.text1') }}
              <h3></h3>
              {{ $t('Partners.town.text2') }}
            </vue-panel-body>

          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>

      <!--
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Suppliers</h2>
          <vue-carousel :images="images" />
          <h6></h6>
        </vue-grid-item>
      </vue-grid-row>
      -->

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>{{ $t('Partners.become.title') }}</h2>
          <h3><i style="display: inline !important;">{{ $t('Partners.become.subtitle') }}</i></h3>

          <vue-panel>
            <vue-panel-body>
              <li>{{ $t('Partners.become.item1') }}</li>
              <p>
                {{ $t('Partners.become.text1') }}
              </p>
              <h3></h3>

              <li>{{ $t('Partners.become.item2') }}</li>
              <p>
                {{ $t('Partners.become.text2') }}
              </p>
              <h3></h3>

              <li>{{ $t('Partners.become.values.title') }}</li>
              <p>
                {{ $t('Partners.become.values.text1') }} <strong>{{ $t('Partners.become.values.text2') }}</strong>
                {{ $t('Partners.become.values.text3') }} <strong>{{ $t('Partners.become.values.text4') }}</strong>
                {{ $t('Partners.become.values.text5') }}
              </p>
              <h3></h3>

              <li>{{ $t('Partners.become.item3') }}</li>
              <p>
                {{ $t('Partners.become.text3') }}
              </p>
              <h3></h3>

              <li>{{ $t('Partners.become.item4') }}</li>
              <p>
                {{ $t('Partners.become.text4') }}
              </p>
              <h3></h3>

              <h4>{{ $t('Partners.contacts.title') }}</h4>
              <ul>
                <li>{{ $t('Partners.contacts.item1') }}</li>
                <li>{{ $t('Partners.contacts.item2') }}</li>
                <li>{{ $t('Partners.contacts.item3') }}</li>
              </ul>
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
  import VuePanel                                         from '../../shared/components/VuePanel/VuePanel.vue';
  import VuePanelHeader
                                                          from '../../shared/components/VuePanel/VuePanelHeader/VuePanelHeader.vue';
  import VuePanelBody
                                                          from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
  import VuePanelFooter
                                                          from '../../shared/components/VuePanel/VuePanelFooter/VuePanelFooter.vue';
  import VueGridRow                                       from '../../shared/components/VueGridRow/VueGridRow.vue';
  import VueCarousel                                      from '../../shared/components/VueCarousel/VueCarousel.vue';

  export default {
    metaInfo:   {
      title: 'IEG2019 - Partners',
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
    },
    data(): any {
      return {
        images:              [
          {
            alt:       'Slide 1',
            copyright: 'unsplash.com/@hahnbo',
            url:       'https://images.unsplash.com/photo-1485932465394-d20cc595f08b?ixlib=rb-0.3.5&s=e8798191cfef2e78f4ac91e71c92ea57&auto=format&fit=crop&w=3750&q=80',
          },
          {
            alt:       'Slide 2',
            copyright: 'unsplash.com/@mitr',
            url:       'https://images.unsplash.com/photo-1486068338746-bc8c63a2d7ea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=348afc4c4ac324a022630fbce9204348&auto=format&fit=crop&w=3890&q=80',
          },
          {
            alt:       'Slide 3',
            copyright: 'unsplash.com/@peter_oslanec',
            url:       'https://images.unsplash.com/photo-1517365884913-3c33884b06fa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05c7363bcb2c0a2c2241e6cdcf0dfb8b&auto=format&fit=crop&w=1234&q=80',
          },
          {
            alt:       'Slide 4',
            copyright: 'unsplash.com/@ihs_photo',
            url:       'https://images.unsplash.com/photo-1496348323715-c11f0fc6aeed?ixlib=rb-0.3.5&s=52406f147b73f1000c032dcc5e4e0aea&auto=format&fit=crop&w=1388&q=80',
          },
          {
            alt:       'Slide 5',
            copyright: 'unsplash.com/@parkamstutz',
            url:       'https://images.unsplash.com/photo-1528150395403-992a693e26c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0651fee03ef0f9dad95014a45adf898a&auto=format&fit=crop&w=1234&q=80',
          },
          {
            alt:       'Slide 6',
            copyright: 'unsplash.com/@mrandybae',
            url:       'https://images.unsplash.com/photo-1492970471430-bc6bd7eb2b13?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9893bc89e46e2b77a5d8c091fbba04e9&auto=format&fit=crop&w=2710&q=80',
          },
        ]
      };
    }
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  li {
    margin-bottom: 10px;
  }

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
