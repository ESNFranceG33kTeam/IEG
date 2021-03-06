<template>
  <div id="app" :class="$style.app">
    <vue-notification-stack />

    <vue-navigation-progress :is-navigating="isNavigating" />

    <vue-nav-bar>
      <ul :class="$style.nav">
        <li>
          <router-link to="/event" @click.native="navBarClose">
            <i>
              <img src="/logos/event.svg" alt="an event calendar"/>
            </i>
            <small>{{ $t('App.nav.events' /* Events */) }}</small>
          </router-link>
        </li>
        <li>
          <router-link to="/participants" @click.native="navBarClose">
            <i>
              <img src="/logos/participants.svg" alt="an athlete shirt"/>
            </i>
            <small>{{ $t('App.nav.participants' /* Participants */) }}</small>
          </router-link>
        </li>
        <li>
          <router-link to="/sports" @click.native="navBarClose">
            <i>
              <img src="/logos/sport.svg" alt="three balloons"/>
            </i>
            <small>{{ $t('App.nav.sport' /* Partners */) }}</small>
          </router-link>
        </li>
        <li>
          <router-link to="/partners" @click.native="navBarClose">
            <i>
              <img src="/logos/partners.svg" alt="two hands shaking each other"/>
            </i>
            <small>{{ $t('App.nav.partners' /* Partners */) }}</small>
          </router-link>
        </li>
          <li>
              <router-link to="/team" @click.native="navBarClose">
                <i>
                  <img src="/logos/team.svg" alt="a team of 3 people"/>
                </i>
                  <small>{{ $t('App.nav.team' /* Team */) }}</small>
              </router-link>
          </li>
          <li>
              <router-link to="/candidacy" @click.native="navBarClose">
                <i>
                  <img src="/logos/what_drives_us.svg" alt="a chat bubble"/>
                </i>
                  <small style="white-space: nowrap">{{ $t('App.nav.candidacy') }}</small>
              </router-link>
          </li>
          <li>
              <router-link to="/media" @click.native="navBarClose">
                <i>
                  <img src="/logos/media.svg" alt="a journalist accreditation"/>
                </i>
                  <small>{{ $t('App.nav.media' /* Media */) }}</small>
              </router-link>
          </li>

        
        <li>
          <a @click="localeSwitch('en')">
            <i>
              <img src="/logos/uk.svg" alt="english flag"/>
            </i>
            <small>English</small>
          </a>
        </li>
        <li>
          <a @click="localeSwitch('fr')">
            <i>
              <img src="/logos/fr.svg" alt="french flag"/>
            </i>
            <small>French</small>
          </a>
        </li>
      </ul>
    </vue-nav-bar>

    <router-view :class="$style.content" />

    <vue-footer />

    <vue-cookie-consent
      current-version="1.0.0"
      :cookie-consent-version="cookieConsentVersion"
      :set-cookie-consent-version="setCookieConsentVersion">
      {{ $t('App.general.cookies') }}
    </vue-cookie-consent>
  </div>
</template>

<script lang="ts">
  import { mapActions, mapGetters } from 'vuex';
  import VueNavBar                  from '../../shared/components/VueNavBar/VueNavBar.vue';
  import VueGrid                    from '../../shared/components/VueGrid/VueGrid.vue';
  import VueGridItem                from '../../shared/components/VueGridItem/VueGridItem.vue';
  import VueFooter                  from '../../shared/components/VueFooter/VueFooter.vue';
  import VueNotificationStack       from '../../shared/components/VueNotificationStack/VueNotificationStack.vue';
  import VueCookieConsent           from '../../shared/components/VueCookieConsent/VueCookieConsent.vue';
  import VueIconBook                from '../../shared/components/icons/VueIconBook/VueIconBook.vue';
  import VueIconHashtag             from '../../shared/components/icons/VueIconHashtag/VueIconHashtag.vue';
  import VueIconPuzzlePiece         from '../../shared/components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece.vue';
  import VueIconFlag                from '../../shared/components/icons/VueIconFlag/VueIconFlag.vue';
  import VueNavigationProgress      from '../../shared/components/VueNavigationProgress/VueNavigationProgress.vue';
  import { loadLocaleAsync }        from '../../shared/plugins/i18n/i18n';
  import { EventBus }               from '../../shared/services/EventBus';

  export default {
    components: {
      VueNavigationProgress,
      VueIconFlag,
      VueIconPuzzlePiece,
      VueIconHashtag,
      VueIconBook,
      VueCookieConsent,
      VueNavBar,
      VueGrid,
      VueGridItem,
      VueFooter,
      VueNotificationStack,
    },
    data(): any {
      return {
        isNavigating: false,
      };
    },
    computed:   {
      ...mapGetters('app', ['cookieConsentVersion']),
    },
    methods:    {
      ...mapActions('app', ['changeLocale', 'setCookieConsentVersion']),
      localeSwitch(locale: string): void {
        loadLocaleAsync(locale)
        // tslint:disable-next-line
        .catch((error: Error) => console.log(error));

        this.changeLocale(locale);
        this.navBarClose();
      },
      navBarClose() {
        EventBus.$emit('navbar.close');
      },
      initProgressBar() {
        this.$router.beforeEach((to: any, from: any, next: any) => {
          this.isNavigating = true;
          next();
        });
        this.$router.afterEach(() => {
          this.isNavigating = false;
        });
      },
    },
    created() {
      this.initProgressBar();
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";
  @import "../../shared/styles/reset";
  @import "../../shared/styles/typo";
  @import "../../shared/styles/global";
  @import url($google-font);

  .app {
    min-height:     100vh;
    display:        flex;
    flex-direction: column;
  }

  .content {
    flex: 1;
  }

  .nav {
    margin:         $space-unit 0 0 0;
    padding:        0;
    list-style:     none;
    display:        flex;
    flex-direction: row;
    flex-wrap:      wrap;
    width:          100%;

    li {
      flex:       1;
      margin:     $space-unit / 2;
      color:      $text-color;
      flex-basis: $space-unit * 10;
      height:     $space-unit * 10;
      background: $divider-color;
      cursor:     pointer;

      a {
        padding:         $space-unit * 2;
        display:         block;
        color:           $text-color;
        text-align:      center;
        text-decoration: none;

        small {
          font-size: 12px;
          display:   block;
        }

        i {
          height: 32px;
          width:  32px;
        }
      }
    }

    @include media(tabletLandscape) {
      margin: 0;

      li {
        margin:     $space-unit;
        opacity:    .8;
        transition: opacity $transition-duration linear;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
</style>
