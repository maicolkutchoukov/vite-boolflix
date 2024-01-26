<script>
import { store } from '../store.js';
import SingleMovie from './SingleMovie.vue';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            idGenres: null
        };
    },
    methods: {
        /* searchGenresList(){
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
        }, */
        /* getCastApi(){
            for (let i = 0; i < store.series.length; i++) {
                const elem = store.series[i];
                store.idFilm.push(elem.id)
                
            }
            console.log(store.idFilm)
        } */

    },
    components:{
        SingleMovie
    }
}

</script>

<template>
    <main>
        <div class="container-fluid">
            <button @click="getCastApi()">Cerca cast</button>
            <!-- Creazione della select con i generi -->
            <select v-model="store.selectedGenres" @change="searchGenresList(), searchGenresMovie(), searchGenresSeries()" id="search-id">
                <option value="">Genere</option>
                <option 
                v-for="(gen, i) in store.genres"
                 :value="gen.name"
                 
                 >
                    {{ gen.name }}
                </option>
            </select>
            <!-- Films section -->
            <div class="row">
                <h2 v-if="store.films.length > 0" class="mb-3 mt-3 ps-4">Film</h2>
                <div v-for="(film, i) in store.films" :key="i" class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3 p-2">
                    <SingleMovie 
                    :titleOrName = "film.title"
                    :originalTitleOrName = "film.original_title"
                    :voteAverage = "film.vote_average"
                    :overview = "film.overview"
                    :originalLanguage = "film.original_language"
                    :posterPath = "film.poster_path"
                    
                    />
                </div>
            </div>
<!--             <div class="row">
                <div class="col">1</div>
                <div class="col">2</div>
                <div class="col">3</div>
                <div class="col">4</div>
                <div class="col">5</div>
                <div class="col">6</div>
                <div class="col">7</div>

            </div> -->
            <!-- Series section -->
            <div class="row">
                <h2 v-if="store.series.length > 0" class="mb-3 mt-3 ps-4">Serie TV</h2>
                <div v-for="(serie, j) in store.series" :key="j" class="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3 p-2">
                    <SingleMovie 
                    :titleOrName = "serie.name"
                    :originalTitleOrName = "serie.original_name"
                    :voteAverage = "serie.vote_average"
                    :overview = "serie.overview"
                    :originalLanguage = "serie.original_language"
                    :posterPath = "serie.poster_path"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.container-fluid{
    background-color: #000000;
    color: white;
}
</style>
