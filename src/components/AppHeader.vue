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
        searchAll(){
            store.films = []
            this.searchFilms()
            this.searchSeries()
        },
        searchFilms(){
            axios.get(store.baseUrlFilms, {
                    params: {
                        query: store.queryFilm
                        
                    }
                })
                .then((response) => {
                    store.films = response.data.results
                    /* console.log('Film', store.films) */
            })
        },
        searchSeries(){
            store.series = []
            axios.get(store.baseUrlSeries, {
                    params: {
                        query: store.queryFilm
                        
                    }
                })
                .then((response) => {
                    store.series = response.data.results
                    /* console.log('Serie TV', store.series) */
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
                        
                        <input @keyup.enter="searchAll()" v-model="store.queryFilm" type="text">
                        
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
</style>
