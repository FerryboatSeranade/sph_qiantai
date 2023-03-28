<template>
  <div class="swiper-container" id="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(carousel,index) in carouselList" :key="carousel.id">
        <!--                    <img src="@/assets/images/floor-1-b01.png">-->
        <!--                    <span>{{carousel.imgUrl}}</span>-->
        <img :src="carousel.imgUrl">
      </div>
      <!--                  <div class="swiper-slide">-->
      <!--                    <img src="@/assets/images/floor-1-b02.png">-->
      <!--                  </div>-->
      <!--                  <div class="swiper-slide">-->
      <!--                    <img src="@/assets/images/floor-1-b03.png">-->
      <!--                  </div>-->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "Carousel",
  props: ['carouselList'],
  watch: {
    'carouselList': {
      immediate: true,
      handler(newVal, oldVal) {
        this.$nextTick(() => {
          this.mySwiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
        })
      },
      deep: true // 监听数组的变化
    }
  }
}
</script>

<style scoped>

</style>