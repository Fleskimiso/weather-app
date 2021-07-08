<template>
  <div class="has-text-centered has-text-weight-bold">Radar pogodowy</div>
  <div class="is-flex is-flex-direction-row is-justify-content-center">
    <iframe
      width="650"
      height="450"
      src="https://embed.windy.com/embed2.html?lat=51.221&lon=22.104&detailLat=49.880&detailLon=21.182&width=650&height=450&zoom=7&level=surface&overlay=rain&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style></style>
