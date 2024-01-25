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
                console.log(response.data)
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
    created(){
        axios.get('https://api.themoviedb.org/3/movie/top_rated', {
            params: {
                api_key : store.apiKey,
                language: 'it',
            }
        })
        .then((response) => {
            store.films = response.data.results
        })
        axios.get('https://api.themoviedb.org/3/tv/top_rated', {
            params: {
                api_key : store.apiKey,
                language: 'it',
            }
        })
        .then((response) => {
            store.series = response.data.results
        })
        axios.get('https://api.themoviedb.org/3/genre/tv/list', {
            params: {
                api_key : store.apiKey,
                language: 'it',
            }
        })
        .then((response) => {
            store.genres = response.data.genres
            console.log(store.genres)
        })
    },
    components: {
        AppHeader,
        AppMain
    },
}

</script>

<template>

    <AppHeader @search='searchMovie' />

    <AppMain />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
</style>
