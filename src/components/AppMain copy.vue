<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store
        };
    },
    methods: {
        convertRate(i){
            let newRate = Math.round(store.films[i].vote_average / 2)
            return newRate
        },
        convertFlags(i){
            let imgString = '../src/assets/img/icons8-'
            if (store.films[i].original_language == 'en'){
                imgString += 'circolare-della-gran-bretagna-48.png'
                console.log(imgString)
            } else if(store.films[i].original_language == 'it'){
                imgString += 'italy-48.png'
            } else if(store.films[i].original_language == 'es'){
                imgString += 'spain-48.png'
            } else if(store.films[i].original_language == 'fr'){
                imgString += 'france-48.png'
            } else if(store.films[i].original_language == 'ru'){
                imgString += 'romania-48.png'
            } else if(store.films[i].original_language == 'de'){
                imgString += 'germany-48.png'
            } else {
                imgString += 'flag-di-programmazione-48.png'
            }
            return imgString
        }
    },
    props:{
        title: String,
        original_title: String,
    }
}
</script>

<template>
    <main>
        <div class="container-fluid bg-danger">
            <div class="row">
                <div v-for="(film, i) in store.films" class="card-film col-3 mb-5 p-3 border">
                    <div>
                        {{ film.title }}
                        {{  }}
                    </div>
                    <div>
                        {{ film.original_title }}
                    </div>
                    <div>
                        {{ film.original_language }}
                        <!-- {{ convertFlags(i) }} -->
                        <img :src="convertFlags(i)" :alt="film.original_language">
                    </div>
                    <div>
                        {{ Math.round(film.vote_average / 2) }}
                        <!-- {{ convertRate(i) }} -->
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
