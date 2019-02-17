<template>
  <div :class="$style.components">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <h1>{{ $t('App.nav.partners') }}</h1>
            <p>
              Many thanks to all of our sponsors and partners which made possible the organization of the Games.
            </p>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>

    <vue-grid>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Responsible Party</h2>

          <vue-panel>
            <vue-panel-body>
              <img :class="$style.imgRight" src="/partners/rp.png" alt="a student doing some sport"/>
              Responsible Party is a project is run across Europe with more than <strong>174,000 students</strong>
              participating to date.
              <strong>Using the peer-to-peer approach student ambassadors are organizing activities during parties in a fun and
                engaging way with the aim to raise awareness about the health effects of alcohol consumption.</strong>
              <h3></h3>
              It's about <strong>smart and simple tips helping you and your friends to really enjoy the party:</strong>
              making the night last longer while staying in good shape, avoiding excessive drinking and its dangerous
              consequences, situations you would regret.
              <h3></h3>
              Aims:
              <ul>
                <li>Raise awareness among students about the health effects of alcohol consumption.</li>
                <li>Contribute to the reduction of binge drinking and promote responsible drinking among students.</li>
              </ul>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Paris City Hall</h2>

          <vue-panel>
            <vue-panel-body>
              Thanks to it 21 deputy mayors, Paris city hall works all year for associations, and its national
              and international outreach.
              <h3></h3>
              Setting for the greatest sport tournaments of the world (Olympic Games, Rugby WorldCup, Football Euro,
              Handball WorldCup…), the city of Paris is a major partner for the International Erasmus Games through
              its logistical support and the lending of sport facilities.
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
          <h2>Become a partner</h2>
          <h3><i style="display: inline !important;">Why should you become a partner of the IEG?</i></h3>

          <vue-panel>
            <vue-panel-body>
              <li>Visibility on a European level</li>
              <p>
              This event targets young people coming from all part of Europe, or outside of Europe. From Spain to
              Finland, Belgium to Greece ou Czech Republic to Romania, becoming a partner of our event will insure
              visibility among all Europe and communication targeting a large public of european young communities.
              </p>
              <h3></h3>

              <li>Communicating with young people</li>
              <p>
              This event is for young international students all over Europe. They are around 20 to 25 years old.
              Becoming a partner is a privilege way to address them and present them your brand.
              </p>
              <h3></h3>

              <li>Sharing values</li>
              <p>
              Becoming a partner is also about sharing the values we want to convey during this event. <strong>Sports for
              everyone</strong>, first of all, since these IEG will be the first edition to put forward disabled access
              to sports during the competition. <strong>Health</strong> and well being will be at the center of the event
              through diverse interventions. Finally, the European citizenship will also be central since the third day
              of IEG coincides with the Europe Day organized by Paris city hall.  Few days from the European elections,
              it is a great opportunity to claim European values as yours too.
              </p>
              <h3></h3>

              <li>Becoming a contributor and contributing to the world of tomorrow</li>
              <p>
              The future is already writing itself today. By becoming a partner of the event, but also of the ESN
              network, you are contributing in the creation of the world of tomorrow and the citizenship of the new
              generation of youth coming from all over Europe.
              </p>
              <h3></h3>

              <li>Profiting from a fiscal deduction</li>
              <p>
              Your donations allow you to profit from a tax deduction on the revenue up to 60% to the limit of 5% of the
              total revenue. Above that, the surplus can be carried over the next five years (Article 238 bis 1° of the
              General Tax Code).
              </p>
              <h3></h3>

              <h4>Contacts</h4>
              <ul>
                <li>yassine.berrada@iegparis2019.com</li>
                <li>fadile.bhayat@iegparis2019.com</li>
                <li>julien.guillot@iegparis2019.com</li>
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
        { name: 'og:image:url', content: 'https://iegparis2019.com/favicon-96x96.png' },
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
