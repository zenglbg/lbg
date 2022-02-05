

<template>
  <div class="header-imgs">
    <client-only>
      <transition-group name="fade" mode="out-in">
        <div
          class="imgs-item"
          v-for="(img, index) in imgs"
          :key="index"
          v-show="index === swipeIndex"
        >
          <img class="imgs-item-img" :src="img" />
        </div>
      </transition-group>
    </client-only>
  </div>
</template>

<script setup lang="ts">
const imgs = [
  "https://pic.zenglbg.com/images/blog/Why-we-use-ReactJS-for-our-projects-Illustration.jpg",
  "https://pic.zenglbg.com/images/blog/computer-4795762_640.jpg",
  "https://pic.zenglbg.com/images/blog/hong-kong-864884_1920.jpg",
  "https://pic.zenglbg.com/images/blog/analytics-3088958_640.jpg",
  "https://pic.zenglbg.com/images/blog/great-wall-3022907_1920.jpg",
  "https://pic.zenglbg.com/images/blog/beijing-3675835_1920.jpg",
  "https://pic.zenglbg.com/images/blog/greg-rakozy-vw3Ahg4x1tY-unsplash.jpg",
  "https://pic.zenglbg.com/images/blog/mockup-5281992_640.jpg",
];
const swipeIndex = ref(0);
const { pause, resume, isActive } = useIntervalFn(() => {
  /* your function */
  const len = imgs.length;
  swipeIndex.value = swipeIndex.value === len - 1 ? 0 : swipeIndex.value + 1;
  console.log("我执行了");
}, 6000);
</script>

<style scoped lang="scss">
.header-imgs {
  position: relative;
  overflow: hidden;
  .imgs-item {
    position: absolute;
    left: 0;
  }
}

.fade-enter-active {
  transition: all 3s ease;
}
.fade-leave-active {
  transition: all 0s;
}

.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}
</style>
