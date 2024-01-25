<script>
import { store } from '../store.js';
import SingleMovie from './SingleMovie.vue';
export default {
    data() {
        return {
            store,
        };
    },
    methods: {
    },
    components:{
        SingleMovie
    }
}
</script>

<template>
    <main>
        <div class="container-fluid bg-danger">
            <div class="row">
                <h2 v-if="store.films.length > 0" class="text-center mb-5 mt-5">Film</h2>
                <div v-for="(film, i) in store.films" :key="i" class="col-2 mb-3 p-2">
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
            <div class="row">
                <h2 v-if="store.series.length > 0" class="text-center mb-5 mt-5">Serie TV</h2>
                <div v-for="(serie, j) in store.series" :key="j" class="col-2 mb-3 p-2">
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
</style>
