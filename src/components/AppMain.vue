<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
            stars: '',
        };
    },
    methods: {
        convertRate(elem){
            let newRate = Math.round(elem.vote_average / 2)
            this.stars = newRate
            return newRate
        },
        convertFlags(elem){
            let imgString = '../src/assets/img/icons8-'
            if ((elem.original_language == 'en')){
                imgString += 'circolare-della-gran-bretagna-48.png'
            } else if(elem.original_language == 'it'){
                imgString += 'italy-48.png'
            } else if(elem.original_language == 'es'){
                imgString += 'spain-48.png'
            } else if(elem.original_language == 'fr'){
                imgString += 'france-48.png'
            } else if(elem.original_language == 'ru'){
                imgString += 'romania-48.png'
            } else if(elem.original_language == 'de'){
                imgString += 'germany-48.png'
            } else {
                imgString += 'flag-di-programmazione-48.png'
            }
            return imgString
        },
        getImg(elem){
            
            if(elem.poster_path != null){
                let imgCopertinaString = 'https://image.tmdb.org/t/p/w342/'
                imgCopertinaString += elem.poster_path
                return imgCopertinaString
            }else {
                let imgCopertinaNotFound = 'https://i.pinimg.com/474x/0c/4c/0c/0c4c0caccba6d36fe55a366782ace08b.jpg'
                return imgCopertinaNotFound 
            }
        }
    },
    props:{
    }
}
</script>

<template>
    <main>
        <div class="container-fluid bg-danger">
            <!-- <div v-if="store.films.length > 0" class="row">
                <h2 v-if="store.series.length > 0" class="text-center mb-5 mt-5">
                    Film
                </h2>
                <div 
                  v-for="(film, i) in store.films" 
                  class="card-film col-2 mb-5 p-3 border">
                    <div>
                        {{ film.title }}
                    </div>
                    <div>
                        {{ film.original_title }}
                    </div>
                    <div>
                        {{ film.original_language }}
                        <img :src="convertFlags(film)" :alt="film.original_language">
                    </div>
                    <div>
                        <span class="d-none">
                            {{ convertRate(film) }}
                        </span>
                        
                        <i v-for="(star, i) in stars" class="rate-stars fa-solid fa-star"></i>
                        <i v-for="(star, i) in 5 - stars" class="fa-regular fa-star"></i>
                    </div>
                    <div class="">
                        <img class="img-fluid" :src="getImg(film)" :alt="film.poster_path">
                    </div>
                </div>
            </div>
            <div v-if="store.series.length > 0" class="row">
                <h2 v-if="store.films.length > 0" class="text-center mb-5 mt-5">Serie TV</h2>
                <div v-for="(serie, j) in store.series" class="card-film col-2 mb-5 p-3 border">
                    <div>
                        {{ serie.name }}
                    </div>
                    <div>
                        {{ serie.original_name }}
                    </div>
                    <div>
                        {{ serie.original_language }}
                        <img :src="convertFlags(serie)" :alt="serie.original_language">
                    </div>
                    <div>
                        <span class="d-none">{{ convertRate(serie) }}</span>
                        
                        <i v-for="(star, j) in stars" class="rate-stars fa-solid fa-star"></i>
                        <i v-for="(star, j) in 5 - stars" class="fa-regular fa-star"></i>
                    </div>
                    <div>
                        <img class="img-fluid m-auto" :src="getImg(serie)" :alt="serie.poster_path">
                    </div>
                </div>
            </div> -->
            <div class="row">
                <h2 v-if="store.series.length > 0" class="text-center mb-5 mt-5">Film</h2>
                <div v-for="(film, i) in store.films" class="col-2 mb-3 p-2">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img class="img-fluid" :src="getImg(film)" :alt="film.poster_path">
                            </div>
                            <div class="flip-card-back px-3 py-4 overflow-y-auto">
                                <div>
                                    Titolo: {{ film.title }}
                                </div>
                                <div>
                                    Titolo originale: {{ film.original_title }}
                                </div>
                                <span class="d-none">
                                    {{ convertRate(film) }}
                                </span>
                                <p class="mb-0">Voto : 
                                    <i v-for="(star, i) in stars" class="rate-stars fa-solid fa-star"></i>
                                    <i v-for="(star, i) in 5 - stars" class="fa-regular fa-star"></i>
                                </p>
                                <p class="">Descrizione: {{ film.overview }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <h2 v-if="store.films.length > 0" class="text-center mb-5 mt-5">Serie TV</h2>
                <div v-for="(serie, j) in store.series" class="col-2 mb-3 p-2">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img class="img-fluid" :src="getImg(serie)" :alt="serie.poster_path">
                            </div>
                            <div class="flip-card-back px-3 py-4 overflow-y-auto">
                                <div>
                                    Titolo: {{ serie.name }}
                                </div>
                                <div>
                                    Titolo originale: {{ serie.original_name }}
                                </div>
                                <span class="d-none">
                                    {{ convertRate(serie) }}
                                </span>
                                <p class="mb-0">Voto : 
                                    <i v-for="(star, j) in stars" class="rate-stars fa-solid fa-star"></i>
                                    <i v-for="(star, j) in 5 - stars" class="fa-regular fa-star"></i>
                                </p>
                                <p class="">Descrizione: {{ serie.overview }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.rate-stars{
    color: yellow;
}
.img-fluid{
    height: 100%;
}

.col-2{
    height: 100%;
    background-color: black;
}
.flip-card {
    background-color: transparent;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    border: 1px solid white;
}
.flip-card{
    position: relative;
}
.flip-card-inner {
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    /* width: 100%; */
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-back {
    position: absolute;
    top:0;
    right: 0;
    backface-visibility: hidden;
    background-color: black;
    width: 100%;
    height: 100%;
    color: white;
    transform: rotateY(180deg);
}
</style>
