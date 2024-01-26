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
        disableSearchIcon(){
            store.searchFlag = false
        }
    },
    components:{
        SingleMovie
    }
}

</script>

<template>
    <main>
        <div @click="disableSearchIcon()" class="container-fluid">
            <!-- Creazione della select con i generi -->
           <div class="ms-5 ps-5">
                <select v-model="store.selectedGenres" @change="$emit('change')" id="search-id" class="bg-black text-white border-black">
                    <option value="" disabled>Genere</option>
                    <option 
                    v-for="(gen, i) in store.genres"
                    :value="gen.name"
                    >
                        {{ gen.name }}
                    </option>
                </select>
           </div>
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
                    :idMovie ="film.id"
                    :idGenres="film.genre_ids"
                    
                    />
                </div>
            </div>
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
                    :idSerie ="serie.id"
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
