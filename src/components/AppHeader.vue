<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    data() {
        return {
            store
        };
    },
    methods: {
        searchFilms(){
            axios.get(store.baseUrlFilms, {
                    params: {
                        query: store.queryFilm
                        
                    }
                })
                .then((response) => {
                    console.log(response.data.results)
                    store.films = response.data.results
                    console.log('Film', store.films)
            })
        },
        searchSeries(){
            axios.get(store.baseUrlSeries, {
                    params: {
                        query: store.queryFilm
                        
                    }
                })
                .then((response) => {
                    console.log(response.data.results)
                    store.series = response.data.results
                    for (let i = 0; i < store.series.length; i++) {
                        const element = store.series[i];
                        store.films.push(element)
                        
                    }
                    console.log('Serie tv', store.films)
            })
        }
    },
    
}
</script>

<template>
    <header>
        <div class="container-fluid text-center p-4 bg-dark text-white">
            <div class="row">
                <div class="col-6">
                    <div class="logo-container">
                        Netflix
                        <img src="../assets/img/icons8-circolare-della-gran-bretagna-48.png" alt="">
                    </div>
                    
                </div>
                <div class="col-6">
                    <div class="search-container">
                        {{ store.queryFilm }}
                        <input @keyup.enter="searchFilms(), searchSeries()" v-model="store.queryFilm" type="text">
                        <button @click="searchFilms(), searchSeries()">Cerca</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
</style>
