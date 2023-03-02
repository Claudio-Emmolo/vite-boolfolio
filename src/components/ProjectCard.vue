<script>
import { store } from '../store';

export default {
  name: 'ProjectCard',
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <div class="card" v-for="project in store.dbProjects">
    {{ project.title }}
  </div>
</template>

<style scoped></style>
