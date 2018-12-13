<template>
  <div :class="$style.components">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <h1>{{ $t('App.nav.participants') }}</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </p>
            <p>
              At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>

    <vue-grid>
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <h2>Participants list</h2>

          <vue-panel>
            <vue-panel-header title="oho je ne cours pas moi" subtitle="je suis bien trop fat"
                              image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" />
            <vue-panel-body>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>

      </vue-grid-row>

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
      title: 'IEG2019 - Participants',
      meta:  [
        {
          name:    'description',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
        {
          name:    'robots',
          content: 'INDEX,FOLLOW',
        },
        {
          name:    'keywords',
          content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
        },

        { name: 'og:url', content: 'https://vue-starter.herokuapp.com/' },
        { name: 'og:site_name', content: 'vue-starter' },
        { name: 'og:type', content: 'website' },
        { name: 'og:locale', content: 'en' },
        {
          name:    'og:title',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
        {
          name:    'og:description',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
        { name: 'og:image:url', content: 'https://vue-starter.herokuapp.com/logo.png' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@_jwerner_' },
        { name: 'twitter:creator', content: '@_jwerner_' },
        {
          name:    'twitter:title',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
        { name: 'twitter:url', content: 'https://vue-starter.herokuapp.com/' },
        { name: 'twitter:image', content: 'https://vue-starter.herokuapp.com/logo.png' },
        {
          name:    'twitter:description',
          content: 'vue-starter - includes most common UI/UX use cases, for example: calendar, date picker, range slider, accordion and more!',
        },
      ],
    },
    components: {
      VueBreadcrumb,
      VueToggle,
      VueDataTable,
      VueCarousel,
      VueTruncate,
      VueBadge,
      VueAutocomplete,
      VueMarkdown,
      VueGrid,
      VueGridItem,
      VueButton,
      VueLoader,
      VuePanel,
      VuePanelHeader,
      VuePanelBody,
      VuePanelFooter,
      VueInput,
      VueCollapse,
      VueModal,
      VueTabGroup,
      VueTabItem,
      VueCheckbox,
      VueTooltip,
      VueSlider,
      VueAccordion,
      VueAccordionItem,
      VuePagination,
      VueSelect,
      VueCalendar,
      VueDatePicker,
      VueDateRangePicker,
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
        collapseDemo:        true,
        showModal:           false,
        checked:             true,
        radio:               'radio1',
        page:                1,
        options:             [
          {
            label: 'Foo',
            value: 'foo',
          },
          {
            label: 'Bar',
            value: 'bar',
          },
          {
            label: 'Baz',
            value: 'baz',
          },
          {
            label: 'Bla Bla Bla Bla Bla',
            value: 'bla',
          },
          {
            label: 'Lorem Ipsum la la la',
            value: 'lorem',
          },
        ],
        selectedOption:      '',
        inputValue:          'test',
        autocompleteOptions: [],
        autocompleteLoading: false,
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
        ],
        dataTableHeader:     dataTableHeaderFixture,
        dataTableData:       dataTableDataFixture,
        toggle:              false,
      };
    },
    methods:    {
      sliderChange(sliderOptions: any) {
        // tslint:disable-next-line
        console.log(sliderOptions);
      },
      formatSliderValue(value: number) {
        return `${Math.floor(value)} €`;
      },
      calendarChange(date: Date | Date[]) {
        // tslint:disable-next-line
        console.log(date);
      },
      addNotificationClick() {
        addNotification(
          {
            title: 'this is a test',
            text:  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          } as INotification,
        );
      },
      selectChange(option: string) {
        // tslint:disable-next-line
        console.log(option);
        this.selectedOption = option;
      },
      onRequest(query: string, shouldReturn: boolean = true) {
        this.autocompleteLoading = true;

        /* istanbul ignore next */
        setTimeout(() => {
          let returnOptions: boolean = Math.random() > 0.5 || query.indexOf('foo') > -1;

          if (!shouldReturn) {
            returnOptions = shouldReturn;
          }

          if (returnOptions) {
            this.autocompleteOptions = AutocompleteOptionsFixture;
          } else {
            this.autocompleteOptions = [];
          }

          this.autocompleteLoading = false;
        }, 1000);
      },
      onAutocompleteChange(option: IAutocompleteOption) {
        // tslint:disable-next-line
        console.log(option);
      },
      dataTableClick(row: any) {
        // tslint:disable-next-line
        console.log(row);
      },
      onDeleteRow(row: any) {
        // tslint:disable-next-line
        alert(JSON.stringify(row));
      },
    },
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
