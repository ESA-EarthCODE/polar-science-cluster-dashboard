---
layout: false
---

<script setup>
    import { withBase } from 'vitepress'
</script>

<NavBar></NavBar>
<eo-dash style="height:calc(100dvh - 64px);display: block" :config="withBase('/configs/config.js')"/>
