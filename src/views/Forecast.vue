<template>
  <div class="about">
    <h1 class="has-text-centered has-text-weight-bold pb-2">
      Prognoza na dwa dni
    </h1>
  </div>
  <div v-if="store.state.forecastData">
    <div
      v-for="forecastDay in store.state.forecastData.forecast.forecastday"
      :key="forecastDay.date"
    >
      <!-- overall day information etc  -->
      <!-- hour information temp, chance of rain, and clouds  -->
      <div class="has-text-centered pb-6">
        <div>Data: {{ forecastDay.date }}</div>
        <div>Maksymalna temperatura: {{ forecastDay.day.maxtemp_c }}</div>
        <div>
          Szansa na deszcz: {{ forecastDay.day.daily_chance_of_rain }} %
        </div>
        <div>Średnia wilgotność: {{ forecastDay.day.avghumidity }} %</div>
        <div>
          Maksymalna prędkość wiatru: {{ forecastDay.day.maxwind_kph }} Km/h
        </div>
      </div>

      <div
        class="
          is-flex
          is-flex-direction-row
          is-flex-wrap-wrap
          is-justify-content-center
          pb-6
        "
      >
        <div
          class="p-5 mx-6"
          v-for="hour in forecastDay.hour"
          :key="hour.time_epoch"
        >
          <!-- display condition and image -->
          <div class="has-text-weight-bold">
            Godzina: {{ hour.time.substring(hour.time.length - 5) }}
          </div>
          <div
            class="
              is-flex
              is-flex-direction-row
              is-justify-content-center
              is-align-items-center
            "
          >
            <div>{{ hour.condition.text }}</div>
            <img :src="hour.condition.icon" />
          </div>
          <div class="has-text-weight-bold">Temperatura: {{ hour.temp_c }}</div>
          <div class="has-text-weight-bold">
            Czy będzie padać: {{ hour.will_it_rain == 1 ? "Tak" : "Nie" }}
            <div></div>
            Szansa na deszcz: {{ hour.chance_of_rain }} %
          </div>
          <div>Zachmurzenie: {{ hour.cloud }} %</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Czekanie na dane...</div>
</template>

<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const store = ref(useStore());
    onMounted(() => {
      if (store.value.state.forecastData === null) {
        store.value.dispatch("loadForecast");
      }
    });
    return {
      store: store.value,
    };
  },
};
</script>
