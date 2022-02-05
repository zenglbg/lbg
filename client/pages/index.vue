<template>
  <nuxt-layout name="main">
    <div class="inner-main-index">
      <h2 class="inner-main-index__divider">
        <span>Post List</span>
      </h2>

      <div class="inner-main-index__posts">
        <LCard />
        <LCard />
        <LCard />
      </div>
    </div>

    <template #slider>
      <LSlider />
    </template>
  </nuxt-layout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<style scoped lang="scss">
.inner-main-index {
  .inner-main-index__divider {
    display: flex;
    align-items: center;
    &::before,
    &::after {
      content: "";
      flex: 1;
      border-top: 1px solid rgb(204, 204, 204);
    }
    span {
      padding: 0 10px;
      text-transform: uppercase;
      color: rgb(204, 204, 204);
      font-weight: 700;
      font-size: 24px;
    }
  }
}
</style>
