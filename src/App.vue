<template>
  <div class="navigationBar" id="nav">
    <div>
      <router-link class="navbar-item is-primary" to="/today"
        >Prognoza na teraz</router-link
      >
    </div>
    <div>
      <router-link to="/forecast" class="navbar-item is-primary"
        >Jutrzejsza prognoza pogody</router-link
      >
    </div>
  </div>
  <router-view />

  <div>
    {{message}}
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      if (store.state.currentWeather === null) {
        store.dispatch("loadCurrentWeather");
      }
    });
    return {
      message: store.state.errorMessage
    }
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
