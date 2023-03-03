<script>
import ProjectCard from '../components/ProjectCard.vue';

import axios from 'axios';


export default {
    name: 'AppProject',
    components: { ProjectCard },
    data() {
        return {
            pageLink: 'http://127.0.0.1:8000',
            apiUrl: 'http://127.0.0.1:8000/api/projects/' + this.$route.params.id,
            project: []
        }
    },
    methods: {
        getProjects() {
            axios.get(this.apiUrl, {
                params: {
                }
            })
                .then((response) => {
                    console.log(response.data.results);
                    this.project = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
    },

    created() {
        this.getProjects()
    },
}
</script>

<template>
    <main>
        <div class="container single-card mt-5">
            <div class="row">
                <div class="col-6 p-3">
                    <h5 class="text-uppercase text-center">{{ project.type.name }}</h5>
                    <h2 class="fw-bold text-center">{{ project.title }}</h2>
                    <p class="my-5">
                        {{ project.description }}
                    </p>
                    <!-- Stars Difficulty -->
                    <h6 class="mb-3">
                        <span class="fw-light">Difficulty: </span>
                        <span v-for="star in project.difficulty" class="fs-5"><i
                                class="fa-solid fa-star text-warning me-1"></i></span>({{
                                    project.difficulty }})
                    </h6>
                    <!-- Date -->
                    <h6 class="mb-3">
                        <span class="fw-light">Date: </span>

                        {{ project.date }}
                    </h6>
                    <!-- GutHub Link -->
                    <h6 class="git-url">
                        <a :href="project.url">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </h6>
                </div>
                <div class="col-6">
                    <img v-if="project.preview_img.startsWith('uploads/')"
                        :src="pageLink + '/storage/' + project.preview_img" :alt="project.title + ' img 1'"
                        class="mb-4 w-100">

                    <img v-else :src="project.preview_img" :alt="project.title + ' img 2'" class="mb-4 w-100">


                    <!-- Technologies -->
                    <div class="technologies mb-5 ps-2">
                        <span class="d-block mb-2 fw-light">Technologies:</span>
                        <span v-for="technology in project.technologies" class="badge m-1 p-1"
                            :style="{ 'background-color': technology.color_tag }">
                            {{ technology.name }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
h6.git-url {
    text-align: center;
    margin-top: 2.5rem;

    a {
        text-decoration: none;
        color: black;
        font-size: 4rem;
        transition: all .2s;

        &:hover {
            color: rgb(0, 119, 255);
        }
    }
}
</style>