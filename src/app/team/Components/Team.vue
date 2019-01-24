<template>
  <div :class="$style.components">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <h1>{{ $t('App.nav.team') }}</h1>
            <p>
              Such a big event couldn't happen without a strong team.
            </p>
            <p>
              That's why we want to show each and every member of our squad, and thank
              them for their involvement in the Games.
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
            <vue-panel-header title="Julien Guillot" subtitle="Head of the OC"
                              image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" />
            <vue-panel-body>
              He’s Julien , 25, journalist (LOL). He likes when his team takes initiative, but he’s always there to help
              them go further. When there’s a problem you can count on him to help and solve it. He likes to be centre
              stage to protect his team and spare a waste of energy (a real hero, this man!). Il aime les potatoes et
              possède 2 cochons d’inde.<br/>
              Fun Fact: He’s proud of his selfie with Zlatan Ibrahimović and he has commented on the radio for the
              Football Euro 2016.

            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h3></h3>
          <vue-panel>
            <vue-panel-header title="Julie Nevant" subtitle="Vice-Head of the OC"
                              image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" />
            <vue-panel-body>
              She is 22 and she just finished her Master Degree of Bioethics Law.<br/>
              She’s a fan Olympic Games, she has been swimming for 10 years and now she can go toe to toe with a mermaid.
              She loves sports and that’s why the IEG are so important to her. From a match to another she will make
              sure that the program of every match of the IEG will run as efficiently as possible, coordinating with
              the different teams of volunteers.

            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h3></h3>
          <vue-panel>
            <vue-panel-header title="Yassine Berrada" subtitle="Partnership Manager"
                              image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" />
            <vue-panel-body>
              He is 23 years old and has been a volunteer for 3 years in ESN Montpellier. He’s doing a Masters in
              Business Development and Key account Management after getting a masters in Engineering. He just recently
              joined Esn Paris after moving to the capital for his studies. He is a dynamic, energetic and cheerful
              person. He likes teamwork and helping others to achieve their goals.
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h3></h3>
          <vue-panel>
            <vue-panel-header title="Fadile Bhayat" subtitle="CHARGÉ DES RELATIONS PUBLIQUES ET DES PARTENAIRES PUBLIQUES"
                              image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" />
            <vue-panel-body>
              In ESN for four years now, he has been local representative and president of ESN Paris. He is also very
              invested at the national level as an administrator in the board of directors. Lately, he has been working
              on the creation ESN Paris’ magazine. Quite the multi-tasker, he studies Information and Communications.
              Beforehand, he also did Computing and Law.
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h3></h3>
          <vue-panel>
            <vue-panel-header title="Orane Maquin" subtitle="Communication Manager"
                              image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" />
            <vue-panel-body>
              She is 22, she’s the boss of Total. She first joined ESN in Lille in january 2016, before moving to Paris
              in september 2017, where she joined her beloved team of parisians and never left. She is a member of
              French ComCom and candidate member of international ComCom. Being part of these communications team helped
              here develop great skills, and she hopes to keep going further with beautiful projects such as the IEG!
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h3></h3>
          <vue-panel>
            <vue-panel-header title="Damon Singleton" subtitle="Language Auditor, CHARGÉ DES RELATIONS INTERNATIONALES"
                              image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" />
            <vue-panel-body>
              He’s Damon, born in the USA. He spent the most of his studies in France. He has a Masters degree in Law,
              specializing in the Protection of rights and fundamental freedom. He’s the son of a basketball coach and
              today an NBA sports commentator for BeIn Sports. He’s a real fan of Basketball which he has played for 11
              years in a club. He’s also a film lover, globe-trotter and oenologist during his spare time.<br/>
              Fun fact: Loves animals, but loves barbecues even more.

            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h3></h3>
          <vue-panel>
            <vue-panel-header title="Philippine Ramirez" subtitle="Treasurer"
                              image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" />
            <vue-panel-body>
              She’s Philippine, almost 25 years old She has a masters degree in Accounting and Auditing, and guess what,
              she was treasurer of ESN France and she’s working as Financial Controller in Paris. She has been a
              volunteer in ESN for 4 years and now, she’s an alumnus but always willing to help the network. She loves
              exploring the world and travelling.  She is a dynamic person, always attentive and looking for new
              challenges!<br/>
              Fun Fact: She often loses her voice during events, but she always gives everything!

            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h3></h3>
          <vue-panel>
            <vue-panel-header title="Samia Hanki" subtitle="Head of Sports"
                              image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" />
            <vue-panel-body>
              And here is Samia, 23, has just finished her Master degree in Cultural Tourism. A little newbie at ESN,
              she has a strong desire to create new experiences and contribute to the development of this association.
              She’s from Italy and she likes to socialize with other cultures. That’s why she joined ESN and wants to
              help with the organisation of this IEG.<br/>
              Fun Fact: she’s little, but she has already played rugby for one year (without having a bone broken).

            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

        <vue-grid-item class="vueGridItem">
          <h3></h3>
          <vue-panel>
            <vue-panel-header title="Rémy Raes" subtitle="Webmaster"
                              image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" />
            <vue-panel-body>
              Actually studiying computer science and leading the French IT Committee, he's a passionnate geek; but don't
              be scared of him, he has the ability to speak to other things than computers, as he's been webmaster, local
              responsible, and vice-president of ESN Lille for the past three years!
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>

      <h2>IEG International Committee Organization</h2>
      <vue-grid-row>
        <vue-grid-item>

          <vue-panel>
            <vue-panel-body>
              <img src="/team/committee.png" alt="International committee organization"/>
              <p>
                They are <strong>Aleksandra Seweryn</strong> (Community Manager), <strong>Hrvoje Grganovic</strong>
                (Project Coordinator) and <strong>Zrinka Trusic</strong> (Communication Officer). The most amazing team to
                work with and make sure the IEG doesn’t turn in a complete disaster !
              </p>
            </vue-panel-body>
          </vue-panel>

        </vue-grid-item>
      </vue-grid-row>

      <h2>Erasmus Student Network</h2>
      <vue-grid-row>
        <vue-grid-item>

          <vue-panel>
            <vue-panel-body>
              <p>
                ESN is a <strong>network of associations</strong> created in Utrecht at the initiative of students who
                were back from a year of an Erasmus exchange, in <strong>1989</strong>. Since, the network, structured
                in three levels (local, national, international) kept growing. It includes <strong>39</strong> countries
                and <strong>525 local associations</strong> in total. France counts <strong>36 local associations</strong>,
                gathered around three missions: the reception and the inclusion of international students, the promotion
                of international mobility and the network animation.
              </p>
              <h3></h3>
              <vue-grid-row>
                <vue-grid-item>
                  <img alt="esn logo" src="/team/esn.png"/>
                </vue-grid-item>
                <vue-grid-item>
                  <img alt="esn logo" src="/team/esnlogo.png"/>
                </vue-grid-item>
              </vue-grid-row>

              <h3></h3>
              <iframe src="https://www.youtube.com/embed/WQ071yzhUxI" width="100%"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>

            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>

      <h2>ESN Paris</h2>
      <vue-grid-row>
        <vue-grid-item>

          <vue-panel>
            <vue-panel-body>
              <p>
                ESN Paris is the local association taking care of the international students coming to Paris, with more
                than <strong>130 activities</strong> a year (travels, visits, language exchange meetings, professional
                trainings, parties, etc.). Our volunteers help them getting settled in their new city, providing
                administrative help, buddies, and discounts with our partners. We also promote <strong>international
                mobility</strong> through intervention in forums, schools, and universities.<br/>
                <strong>Since the end of 2017</strong>, volunteers of ESN Paris have been working on the IEG, ensuring
                the best welcome for the participants.
              </p>
              <h3></h3>
              <vue-grid-row>
                <vue-grid-item>
                  <img src="/team/esnparis.png" alt="ESN Paris team" />
                </vue-grid-item>
                <vue-grid-item>
                  <img src="/team/esnparis_logo.png" alt="ESN Paris logo" />
                </vue-grid-item>
              </vue-grid-row>
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
    computed:   {
      today(): Date {
        const today: Date = new Date();

        return new Date(today.getFullYear(), today.getMonth(), today.getDate());
      },
      nextWeek(): Date {
        return new Date(this.today.getTime() + 7 * 24 * 60 * 60 * 1000);
      },
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
</style>
