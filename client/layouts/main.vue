<template>
  <LHeader></LHeader>

  <LWaves></LWaves>

  <main class="main-body">
    <div class="body-inner">
      <div id="main" class="inner-main">
        <slot></slot>
      </div>
      <div class="inner-slider">
        <slot name="slider"></slot>
      </div>
    </div>
  </main>


  <LFooter></LFooter>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
@import "assets/scss/layout.scss";

.main-body {
  background: #FDFDFD;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .body-inner {
    width: calc(100% - 10px);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin: 0 auto;

    .inner-slider {
      width: 240px;
      position: static;
      top: 0;
      bottom: 0;
      transition: all 0.2s ease-in-out 0s;
      padding: 15px;
      padding-bottom: 32px;
      box-sizing: border-box;
    }

    .inner-main {
      padding: 20px;
      box-sizing: border-box;
      width: calc(100% - 250px);
      background: rgba(0, 0, 0, 0)
        linear-gradient(to top, rgb(255, 255, 255) 0px, rgb(253, 253, 253) 20%);
      box-shadow: rgb(247, 247, 247) 0px 20px 16px 5px;
      min-height: 600px;
    }
  }
}
</style>
