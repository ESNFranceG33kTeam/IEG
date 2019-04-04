<template>
  <div :class="[$style.devEx, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
            <h2 style="font-weight: bold">{{ $t('Home.countdown.text') }}</h2>
            <h1 style="font-weight: 300">{{ timeLeft }}</h1>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
    import VueGrid         from '../../shared/components/VueGrid/VueGrid.vue';
    import VueGridItem     from '../../shared/components/VueGridItem/VueGridItem.vue';
    import VueGridRow      from '../../shared/components/VueGridRow/VueGridRow.vue';
    import VuePanel        from '../../shared/components/VuePanel/VuePanel.vue';
    import VuePanelBody    from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
    import VueIconCode     from '../../shared/components/icons/VueIconCode/VueIconCode.vue';
    import VueIconBullhorn from '../../shared/components/icons/VueIconBullhorn/VueIconBullhorn.vue';

    export default {
        components: {
            VueIconBullhorn,
            VueIconCode,
            VueGrid,
            VueGridItem,
            VuePanel,
            VuePanelBody,
            VueGridRow,
        },
        data(): any {
            return {
                timeLeft: 'countdown'
            };
        },
        methods: {
            updateTime(time: any) {
                this.timeLeft = time;
            }
        },
        mounted() {
            // countdown
            const countDownDate = new Date('May 2, 2019 10:00:00').getTime();
            const countdown = setInterval(() => {

                // Get todays date and time
                const now = new Date().getTime();

                // Find the distance between now and the count down date
                const distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Display the result in the countdown element
                let time = '' + days;
                time += ' ' + ([0, 1].includes(days) ? this.$t('Time.day') : this.$t('Time.days')) + ' - ' + hours + ' ' +
                    ([0, 1].includes(hours) ? this.$t('Time.hour') : this.$t('Time.hours')) + ' ' +
                    minutes + ' ' + ([0, 1].includes(minutes) ? this.$t('Time.minute') : this.$t('Time.minutes')) + ' ' +
                    seconds + ' ' + ([0, 1].includes(seconds) ? this.$t('Time.second') : this.$t('Time.seconds'));
                this.updateTime(time);

                // If the count down is finished, write some text
                if (distance < 0) {
                    clearInterval(countdown);
                    this.timeLeft = this.$t('Time.elapsed');
                }
            }, 1000);
        }
    };
</script>

<style lang="scss" module>
  @import '../../shared/styles';

  .devEx {
    display:    block;
    text-align: center;

    i {
      height:  $font-size-h1;
      width:  $font-size-h1;
      margin-top: $space-unit;
    }

  }
</style>
