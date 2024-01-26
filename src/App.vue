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
                
                console.log('Data Movies', response.data)
                for (let i = 0; i < store.films.length; i++) {
                const elem = store.films[i];
                store.idFilm.push(elem.id)
                
                }
                console.log('Id film',store.idFilm)
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
                
                console.log('Data Series',response.data)
                for (let i = 0; i < store.series.length; i++) {
                const elem = store.series[i];
                store.idSerie.push(elem.id)
                
                }
                console.log('id serie',store.idSerie)
            })
            

        },
        searchGenresList(){
            console.log('entra')
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
            console.log('Lista dei generi', store.genres)
            for (let i = 0; i < store.genres.length; i++) {
                const gen = store.genres[i]
                if (gen.name == store.selectedGenres){
                    console.log('confronto', gen.name, store.selectedGenres)
                    this.idGenres = gen.id
                }
                
            }
        },
        searchGenresMovie(){
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
        },
        searchGenresSeries(){
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
        /* https://api.themoviedb.org/3/tv/   IDFILM/SERIE    /credits?api_key=db9df9f71721b8623e12907efc8216b8*/
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
