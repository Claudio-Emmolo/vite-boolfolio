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


        <div class="card h-100 position-relative">
          <!-- Type -->
          <div class="type position-absolute">
            <span class="fw-bold text-uppercase p-1">
              {{ project.type.name }}
            </span>
          </div>

          <img :src="project.preview_img" :alt="project.title + ' img'" class="mb-4">

          <div class="text-box text-start">
            <h3 class="fw-bold mb-2">{{ project.title }}</h3>
            <h6 class="text-uppercase">{{ project.date }}</h6>
            <h6 class="fw-bold mb-3">Difficulty -
              <span v-for="star in project.difficulty"><i class="fa-solid fa-star text-warning me-1"></i></span>({{
                project.difficulty }})
            </h6>


            <div class="technologies mb-5">
              <span v-for="technology in project.technologies" class=" badge bg-success m-1 p-1">
                {{ technology.name }}
              </span>
            </div>
          </div>


          <div class="button-more position-absolute bottom-0 end-0 m-3">
            <a href="#" class="btn btn-primary mt-5 fw-bold">Show More</a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
div.type {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
