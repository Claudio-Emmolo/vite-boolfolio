<script>
import ProjectCard from '../components/ProjectCard.vue';

import axios from 'axios';
import { store } from '../store';


export default {
    name: 'AppProjects',
    components: { ProjectCard },
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
                    api_token: 'h2rz2kPNJoG8CelUp0svR4ZbrUQiSUNOP6aTUQbrsQnNkkHWjlBGeeQTCgW6QafWHHUDa75XrvBZmvsx',
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
    <main>
        <h1 class="mb-5 text-center">My Projects</h1>
        <!-- Import Cards -->
        <ProjectCard @nextPageClick="nextPage()" @prevPageClick="prevPage()" @pageSelect="pageSelect"
            :pageControl="pageControl.links" :pageLink="pageLink" />
    </main>
</template>

<style lang="scss" scoped>
img {
    height: 350px;
    object-fit: cover;
}
</style>