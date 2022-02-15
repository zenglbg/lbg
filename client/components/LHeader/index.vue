<template>
  <header class="page-header">
    <div class="header-inner">
      <div class="inner-brand"></div>
      <nav :class="{ 'inner-nav': true, show: false }">
        <div class="nav-toggle"></div>
        <ul class="nav-menu">
          <li class="nav-menu-item">
            <a href="/" class="nav-menu-item__link">圈圈-zenglbg</a>
          </li>

          <li class="nav-menu-item active">
            <i class="lbg-icon lbg-icon-home"></i>
            <a href="/" class="nav-menu-item__link">home</a>
          </li>

          <li class="nav-menu-item active">
            <i class="lbg-icon lbg-icon-male"></i>
            <a href="/about" class="nav-menu-item__link">about</a>
          </li>
          <li class="nav-menu-item active">
            <i class="lbg-icon lbg-icon-buffer"></i>
            <a href="/posts" class="nav-menu-item__link">posts</a>
          </li>
          <li class="nav-menu-item active">
            <i class="lbg-icon lbg-icon-socratic"></i>
            <a href="/friends" class="nav-menu-item__link">friends</a>
          </li>
        </ul>

        <ul class="nav-right">
          <li class="nav-right-item theme">
            <i class="lbg-icon lbg-icon-theme"></i>
          </li>

          <li class="nav-right-item search">
            <i class="lbg-icon lbg-icon-search"></i>
          </li>
        </ul>
      </nav>
    </div>

    <l-swipe></l-swipe>

    <div class="header-tool"></div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
</script>

<style scoped lang="scss">
@import "./css.scss";
</style>
