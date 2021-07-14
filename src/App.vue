<template>
  <div class="navigationBar" id="nav">
    <div>
      <router-link
        class="navbar-item is-primary is-clickable is-size-7-mobile"
        to="/today"
        >Prognoza na teraz</router-link
      >
    </div>
    <div>
      <router-link
        to="/forecast"
        class="navbar-item is-primary is-clickable is-size-7-mobile"
        >Jutrzejsza prognoza pogody</router-link
      >
    </div>
    <div>
      <router-link
        to="/radar"
        class="navbar-item is-primary is-clickable is-size-7-mobile"
      >
        Radar
      </router-link>
    </div>
  </div>
  <router-view />

  <div>
    {{ message }}
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    onMounted(() => {
      if (store.state.currentWeather === null) {
        store.dispatch("loadCurrentWeather");
      }
      router.addRoute("Today");
    });
    return {
      message: store.state.errorMessage,
    };
  },
};
</script>

<style>
@import url("../node_modules/bulma/css/bulma.css");

.navigationBar {
  display: flex;
  background: darkgrey;
  flex-direction: row;
}
</style>
