<template>
  <section class="scene-wrapper">
    <header
      v-show="needHeader"
      :class="['main-header', { 'header-nav-open': navShow }]"
    >
      <img src="../assets/logo.png" alt="" class="main-logo" />
      <i class="nav-btn" @click="toggleNav"></i>
      <div class="nav-content"></div>
    </header>
    <router-view></router-view>
    <bottomNav v-show="navShow"></bottomNav>
  </section>
</template>

<script lang="ts">
/// <reference path="../scene.d.ts" />
import { ref, defineComponent, onMounted, Ref, reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import bottomNav from '../components/bottomNav.vue'
export default defineComponent({
  name: 'IndexScene',
  props: {},
  components: { bottomNav },
  setup: () => {
    const routes = useRoute();
    const navShow = ref(false)
    const needHeader = computed(() => {
      return (routes.name as string).indexOf('start') == -1
    })
    return { needHeader, navShow };
  },
  watch: {
    '$route': function() {
      this.navShow = false
    }
  },
  mounted() { },
  methods: {
    toggleNav() {
      this.navShow = !this.navShow
    }
  }
});
</script>

<style lang="scss">
.scene-wrapper {
  max-width: 640px;
  padding: 0 40px;
  margin: 0 auto;
}
.main-header {
  height: 60px;
  padding: 20px 0;
  position: relative;
}
.main-logo {
  width: 127.5px;
  height: 60px;
  display: block;
}
.main-btn {
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  background: #18191b;
  color: #fdfdfd;
  text-align: center;
}
.nav-btn {
  position: absolute;
  right: 0;
  top: 30px;
  height: 40px;
  color: #18191b;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -1px;
    transform: translate(0, -3px) rotate(0);
    right: 0;
    width: 20px;
    height: 2px;
    background: currentColor;
    transition: all 0.3s ease-in-out;
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -1px;
    right: 0;
    transform: translate(0, 3px) rotate(0);
    width: 20px;
    height: 2px;
    background: currentColor;
    transition: all 0.3s ease-in-out;
  }
}

.header-nav-open {
  .nav-btn {
    &:before {
      transform: translate(0, 0) rotate(45deg);
    }
    &:after {
      transform: translate(0, 0) rotate(-45deg);
    }
  }
}
</style>
