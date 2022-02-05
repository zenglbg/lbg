<template>
  <div class="slider">
    <div class="slider-avatar">
      <img
        src="https://pic.zenglbg.com/images/girl/girl3/photo_2021-08-06 14.27.06.jpeg"
        alt
        srcset
      />
    </div>

    <p class="slider-name">zenglbg</p>

    <div class="slider-description">
      这是一个关于前端，flutter，nodejs, vue, react 的技术分享博客
    </div>

    <nav class="slider-state">
      <div class="slider-state-item posts">
        <a href>
          <span class="count">14</span>
          <span class="name">posts</span>
        </a>
      </div>
      <div class="slider-state-item categores">
        <a href>
          <span class="count">14</span>
          <span class="name">categores</span>
        </a>
      </div>
      <div class="slider-state-item tags">
        <a href>
          <span class="count">8</span>
          <span class="name">tags</span>
        </a>
      </div>
    </nav>

    <div class="slider-social">
      <a href class="slider-social-item">
        <i class="lbg-icon lbg-icon-github"></i>
      </a>
      <a href class="slider-social-item">
        <i class="lbg-icon lbg-icon-music"></i>
      </a>
      <a href class="slider-social-item">
        <i class="lbg-icon lbg-icon-twitter"></i>
      </a>
      <a href class="slider-social-item">
        <i class="lbg-icon lbg-icon-wechat"></i>
      </a>
      <a href class="slider-social-item">
        <i class="lbg-icon lbg-icon-youtube"></i>
      </a>
      <a href class="slider-social-item">
        <i class="lbg-icon lbg-icon-bank"></i>
      </a>
    </div>

    <ul class="slider-menu">
      <li class="slider-menu-li">
        <i class="lbg-icon lbg-icon-home"></i>
        <span>home</span>
      </li>
      <li class="slider-menu-li">
        <i class="lbg-icon lbg-icon-male"></i>
        <span>about</span>
      </li>
      <li class="slider-menu-li">
        <i class="lbg-icon lbg-icon-buffer"></i>
        <span>posts</span>
      </li>
      <li class="slider-menu-li">
        <i class="lbg-icon lbg-icon-socratic"></i>
        <span>firends</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px;
  &-avatar {
    border-radius: 50%;
    width: 160px;
    height: 160px;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      max-width: 100%;
    }
  }

  &-name {
    height: 32px;
    margin-top: 5px;
    text-align: center;
    font-size: 16px;
    color: rgb(51, 51, 51);
    text-transform: uppercase;
  }

  &-description {
    color: rgb(153, 153, 153);
    line-height: 1.2em;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    text-align: center;
  }

  &-state {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    &-item {
      flex: 1;
      height: inherit;

      a {
        height: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .count {
          font-size: 20px;
          font-weight: 600;
          color: rgb(102, 102, 102);
          line-height: 28px;
          text-decoration: none;
        }

        .name {
          font-size: 14px;
          color: rgb(102, 102, 102);
        }
      }
    }
  }

  &-social {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    &-item {
      width: 30px;
    }
  }

  &-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 20px;

    &-li {
      width: 80%;
      height: 50px;
      display: flex;
      align-items: center;
      border-radius: 10px;
      justify-content: center;
      background: linear-gradient(45deg, #fda, #f9e);
      &:nth-child(n + 2) {
        margin-top: 10px;
      }
      .lbg-icon {
        margin-right: 5px;
      }
    }
  }
}
</style>
