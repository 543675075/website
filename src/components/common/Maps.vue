<template>
  <baidu-map class="map" :center="center" :zoom="15" ak="4MVWVvPYhAftKxXla46wFeu0It9L7yex">
    <bm-marker :position="center" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label :content="content" :labelStyle="labelStyle" :offset="offset"/>
    </bm-marker>
  </baidu-map>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmMarker from 'vue-baidu-map/components/overlays/Marker.vue'
import BmLabel from 'vue-baidu-map/components/overlays/Label.vue'
export default {
  components: {
    BaiduMap,
    BmMarker,
    BmLabel
  },
  data() {
    return {
      center:{
        lng: 120.447509, 
        lat: 31.93322
      },
      zoom: 15,
      content: "",
      ak: "4MVWVvPYhAftKxXla46wFeu0It9L7yex",
      labelStyle: {
        color: 'red', 
        fontSize : '16px',
        border: "0",
        backgroundColor :"0.9",
      },
      offset: {
        width: -35, 
        height: 30
      }
    }
  },
}
</script>

<style>
.map {
  margin: 0 auto;
  width: 80%;
  height: 200px;
}
</style>