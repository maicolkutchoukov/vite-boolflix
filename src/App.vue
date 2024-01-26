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
            store.actors = []
            /* Ricerca de film */
            axios.get(store.baseUrlFilms, {
                params: {
                    api_key : store.apiKey,
                    language: 'it',
                    query: store.queryFilm
                }
            })
            .then((response) => {
                store.films = response.data.results
                for (let i = 0; i < store.films.length; i++) {
                const elem = store.films[i];
                store.idFilm.push(elem.id)
                }
            })
            /* Ricerca delle serie */
            axios.get(store.baseUrlSeries, {
                params: {
                    api_key : store.apiKey,
                    language: 'it',
                    query: store.queryFilm
                }
            })
            .then((response) => {
                store.series = response.data.results
                for (let i = 0; i < store.series.length; i++) {
                    const elem = store.series[i];
                    store.idSerie.push(elem.id)
                }
            })
        },
        searchGenresList(){
            axios.get('https://api.themoviedb.org/3/discover/movie/?', {
                params: {
                    api_key : store.apiKey,
                    language: 'it',
                    with_genres: store.selectedGenres
                }
            })
            .then((response) => {
                store.filteredGenres = response.data.results
            })
                for (let i = 0; i < store.genres.length; i++) {
                    const gen = store.genres[i]
                    if (gen.name == store.selectedGenres){
                        this.idGenres = gen.id
                    }
            }
            axios.get('https://api.themoviedb.org/3/discover/movie/?', {
                params: {
                    api_key : store.apiKey,
                    language: 'it',
                    with_genres: this.idGenres
                }
                })
                .then((response) => {
                    store.films = response.data.results
            })
            axios.get('https://api.themoviedb.org/3/discover/tv/?', {
                params: {
                    api_key : store.apiKey,
                    language: 'it',
                    with_genres: this.idGenres
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

    <AppMain @change='searchGenresList'/>
</template>

<style lang="scss">
@use "assets/scss/main" as *;
</style>
