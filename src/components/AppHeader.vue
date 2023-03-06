<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            navItemList: [
                {
                    name: 'Home',
                    url: 'home'
                },
                {
                    name: 'Projects',
                    url: 'projects'
                },
                {
                    name: 'About Us',
                    url: 'about-us'
                },
            ]
        }
    },
}
</script>


<template>
    <header class="mb-3">
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark ">
            <div class="container">
                <router-link class="navbar-brand" :to="{ name: 'home' }">Logo</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" v-for="navItem in navItemList">
                            <router-link class="nav-link" :class="(this.$route.name == navItem.url) ? 'active' : ''"
                                :to="{ name: navItem.url }">
                                {{ navItem.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>
