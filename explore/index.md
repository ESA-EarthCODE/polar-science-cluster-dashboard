---
layout: false
---

<script setup>
    import { withBase } from 'vitepress'
    import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue';>
</script>

<VPNav />
<eo-dash :config="withBase('/configs/config.js')"/>

<style scoped>
  eo-dash {
    display:block;
    position: relative;
    top: var(--vp-nav-height);
    height: calc(100dvh - var(--vp-nav-height)) !important;
  }
  @media (max-width: 960px) {
    eo-dash {
      top: 0;
    }
  }
</style>
