<template>
  <div class="card-container">
    <div class="card-inner">
      <div class="inner-img">
        <a href>
          <img
            src="https://pic.zenglbg.com/images/girl/girl4/photo_2021-08-11 11.04.35.jpeg"
            alt="photo_2021"
          />
        </a>
      </div>
      <div class="inner-info">
        <div class="content-meta">
          <span class="meta-item">
            <span class="item-icon">
              <i class="lbg-icon lbg-icon-calendar"></i>
            </span>
            <time class="date-created" datetime="2021-09-12">2021-08-12</time>
          </span>
        </div>

        <h3>android studio Preview 在m1芯片的mac上无法打开终端</h3>

        <div class="content-excerpt">
          android studio Preview 在m1芯片的mac上无法打开终端问题android studio Preview 在m1芯片的mac上打开终端报错，错误显示：
          12345Cannot open Local TerminalFailed to start [/bin/bash, --rcfile, /Applications/Android Studio.app/Contents/plugins/terminal/jediterm-bash.in, -i] in /Users/&#123;UserName&#125;/AndroidSee your idea.log...
        </div>

        <div class="content-meta footer">
          <span>
            <a href>
              <i class="lbg-icon lbg-icon-flag"></i>
              <span>flutter</span>
            </a>
          </span>
          <span>
            <a href>
              <i class="lbg-icon lbg-icon-flag"></i>
              <span>flutter</span>
            </a>
          </span>
          <span>
            <a href>
              <i class="lbg-icon lbg-icon-flag"></i>
              <span>flutter</span>
            </a>
          </span>
        </div>

        <a href class="content-more">more...</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>


<style lang="scss">
.card-container {
  padding: 15px;
  height: (160px + 16px + 48px);
  box-sizing: border-box;

  .card-inner {
    width: 100%;
    height: 100%;
    box-shadow: rgb(247, 247, 247) 0px 20px 16px 5px;
    border-radius: 10px;
    display: flex;

    .inner-img {
      width: 50%;
      height: inherit;
      overflow: hidden;
      margin-right: 20px;
      clip-path: polygon(0 0, 92% 0%, 100% 100%, 0% 100%);

      img {
        width: 100%;
        object-fit: cover;
        transform: translateY(-38%);
      }
    }

    .inner-info {
      width: 50%;
      padding: 16px 24px 48px 0;
      box-sizing: border-box;
      position: relative;

      .content-meta {
        color: rgb(153, 153, 153);
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .meta-item {
          display: flex;
          align-items: center;
        }

        &.footer {
          justify-content: flex-start;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 16px;
          .lbg-icon {
            width: 13px;
            height: 13px;
          }
          a {
            color: rgb(153, 153, 153);
            font-size: 13px;
          }
        }
      }

      h3 {
        color: rgb(233, 84, 107);
        font-size: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 10px 0;
      }

      .content-excerpt {
        color: rgb(51, 51, 51);
        font-size: 14px;
        line-height: 28px;
        height: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .content-more {
        background: linear-gradient(
          to right,
          rgb(237, 110, 160) 0px,
          rgb(236, 140, 105) 100%
        );
        position: absolute;
        right: -10px;
        bottom: -10px;
        padding: 5px 16px;
        line-height: 32px;
        border-top-left-radius: 16px;
        border-bottom-right-radius: 16px;
        font-size: 16px;
        color: #fff;
        text-decoration: none;
      }
    }
  }

  &:nth-child(even) {
    .card-inner {
      flex-direction: row-reverse;

      .inner-img {
        clip-path: polygon(0 0%, 100% 0%, 100% 100%, 8% 100%);
        margin-right: 0;
        margin-left: 20px;
      }

      .inner-info {
        .content-meta.footer {
          justify-content: flex-end;
        }
        .content-more {
          right: auto;
          left: -10px;
          bottom: -10px;
        }
      }
    }
  }
}
</style>
