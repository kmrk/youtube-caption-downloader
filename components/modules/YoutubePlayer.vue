<template>
  <div
    class="youtube-player"
  >
    <div
      v-if="videoId"
      class="inner"
    >
      <iframe
        class="iframe"
        type="text/html"
        :src="src"
        :width="width"
        :height="height"
      />
    </div>
  </div><!-- /.youtube-player -->
</template>

<script>
export default {
  name: 'YoutubePlayer',
  props: {
    videoId: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 640
    },
    height: {
      type: Number,
      default: 360
    }
  },
  computed: {
    src() {
      return `https://www.youtube.com/embed/${this.videoId}`
    }
  }
}
</script>

<style lang="scss" scoped>
.youtube-player {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;

  .inner {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 70%;
  }

  .iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
