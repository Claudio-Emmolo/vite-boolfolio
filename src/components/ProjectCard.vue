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
  <section id="project-cards" class="container-fluid">
    <div class="row g-4">
      <div class="col-4" v-for="project in store.dbProjects">
        <div class="card h-100">
          <img :src="project.preview_img" :alt="project.title + ' img'" class="mb-4">
          <div class="text-box text-start">
            <h3 class="fw-bold mb-2">{{ project.title }}</h3>
            <h6 class="text-uppercase">Date: {{ project.date }}</h6>
            <h6 class="text-uppercase">Difficulty:
              <span v-for="star in project.difficulty"><i class="fa-solid fa-star text-warning me-1"></i></span>({{
                project.difficulty }})
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
