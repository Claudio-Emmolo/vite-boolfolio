<script>
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';

import axios from 'axios';
import { store } from './store';


export default {
  name: 'App',
  components: { ProjectCard, AppHeader },
  data() {
    return {
      store,
      pageLink: 'http://127.0.0.1:8000',
      apiUrl: 'http://127.0.0.1:8000/api/projects',
      pageControl: [],
      page: ''
    }
  },
  methods: {
    getProjects() {
      axios.get(this.apiUrl, {
        params: {
        }
      })
        .then((response) => {
          console.log(response.data.results.data);
          store.dbProjects = response.data.results.data;
          this.pageControl = response.data.results;
        })
        .catch(function (error) {
          console.log(error);
        })
    },


    prevPage() {
      this.apiUrl = this.pageControl.prev_page_url;
      this.getProjects();
      window.scrollTo(0, 0);
    },
    nextPage() {
      this.apiUrl = this.pageControl.next_page_url;
      this.getProjects();
      window.scrollTo(0, 0);
    },
    pageSelect(pageChose) {
      console.log(this.pageSelect)
      this.apiUrl = pageChose;
      this.getProjects();
      window.scrollTo(0, 0);
    }

  },

  created() {
    this.getProjects()
  },
}
</script>

<template>
  <AppHeader />

  <main>
    <h1 class="mb-5 text-center">My Projects</h1>
    <!-- Import Cards -->
    <ProjectCard @nextPageClick="nextPage()" @prevPageClick="prevPage()" @pageSelect="pageSelect"
      :pageControl="pageControl.links" :pageLink="pageLink" />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
