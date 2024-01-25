<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store.js';
export default {
    data() {
        return {
            store
        };
    },
    methods: {
        searchMovie(){
            axios.get(store.baseUrlFilms, {
                    params: {
                        api_key : store.apiKey,
                        language: 'it',
                        query: store.queryFilm
                        
                    }
                })
                .then((response) => {
                    store.films = response.data.results
                    
            })
            axios.get(store.baseUrlSeries, {
                    params: {
                        api_key : store.apiKey,
                        language: 'it',
                        query: store.queryFilm
                        
                    }
                })
                .then((response) => {
                    store.series = response.data.results
                    
            })
        },
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
}

</script>

<template>

    <AppHeader @search='searchMovie' />

    <AppMain />

    <AppFooter />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
</style>
