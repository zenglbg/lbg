<template>
  <div id="waves">
    <svg
      class="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        ></path>
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0"></use>
        <use xlink:href="#gentle-wave" x="48" y="3"></use>
        <use xlink:href="#gentle-wave" x="48" y="5"></use>
        <use xlink:href="#gentle-wave" x="48" y="7"></use>
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
#waves {
  height: 15vh;
  max-height: 150px;
  min-height: 50px;
  
  @media (max-width: 767px) {
    height: 10vh;
  }

  .waves {
    background: transparent;
    width: 100%;
    height: inherit;
    position: relative;

    /* Animation */
    .parallax > use {
      animation: wave 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
    }
    .parallax > use:nth-child(1) {
      animation-delay: -2s;
      animation-duration: 7s;
      fill: rgba($color: #fdfdfd, $alpha: 0.7);
    }
    .parallax > use:nth-child(2) {
      animation-delay: -3s;
      animation-duration: 10s;
      fill: rgba($color: #fdfdfd, $alpha: 0.5);
    }
    .parallax > use:nth-child(3) {
      animation-delay: -4s;
      animation-duration: 13s;
      fill: rgba($color: #fdfdfd, $alpha: 0.3);
    }
    .parallax > use:nth-child(4) {
      animation-delay: -5s;
      animation-duration: 20s;
      fill: rgba($color: #fdfdfd, $alpha: 1);
    }
  }
}

@keyframes wave {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
