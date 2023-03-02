<script>
import ProjectCard from './components/ProjectCard.vue';
import axios from 'axios';
import { store } from './store';


export default {
  name: 'App',
  components: { ProjectCard },
  data() {
    return {
      store,
      apiUrl: 'http://127.0.0.1:8000/api/projects'
    }
  },
  methods: {
    getProjects() {
      axios.get(this.apiUrl, {
        params: {}
      })
        .then(function (response) {
          console.log(response.data.results.data);
          store.dbProjects = response.data.results.data;
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  },

  created() {
    this.getProjects()
  },
}
</script>

<template>
  <ProjectCard />
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
