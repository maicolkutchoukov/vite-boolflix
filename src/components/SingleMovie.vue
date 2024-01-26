<script>
import { store } from '../store.js';
import axios from 'axios'
export default {
    data() {
        return {
            store,
            singleMovieGenres:[],
        };
    },
    methods: {
        getCastApi(){
            // CAST DEI SINGOLI FILM
            store.actors = []
            if(this.idMovie){
                const urlActorsFilm = "https://api.themoviedb.org/3/movie/" + this.idMovie + "/credits?api_key=" + store.apiKey
                axios.get(urlActorsFilm)
                .then((response) => {
                    for (let i = 0; i < 5; i++) {
                        store.actors.push(response.data.cast[i].name)
                    }
                })
            } else if (this.idSerie){
                const urlActorsSerie = "https://api.themoviedb.org/3/tv/" + this.idSerie + "/credits?api_key=" + store.apiKey
                axios.get(urlActorsSerie)
                .then((response) => {
                    for (let i = 0; i < 5; i++) {
                        store.actors.push(response.data.cast[i].name)
                    }
                })
            }
        },
        getMovieGenres(){
            console.log('getMoviesGenres')
            console.log(store.genres)
            for (let i = 0; i < store.genres.length; i++) {
                const gen = store.genres[i];
                if(this.idGenres.includes(gen.id)){
                    this.singleMovieGenres.push(gen.name)
                }
            }
        },
        emptyCastAndGenres(){
            store.actors = []
            this.singleMovieGenres = []
        }
    },
    props:{
        titleOrName : String,
        originalTitleOrName : String,
        voteAverage : Number,
        originalLanguage: String,
        overview : String,
        posterPath: String,
        idMovie: Number,
        idSerie: Number,
        movieCast: Array,
        idGenres: Array
    },
    computed:{
        imgPath(){
            if (this.posterPath){
            return 'https://image.tmdb.org/t/p/w342/' + this.posterPath + '.jpg'
            } else{
                return 'https://i.pinimg.com/474x/0c/4c/0c/0c4c0caccba6d36fe55a366782ace08b.jpg'
            }
        },
        roundVote(){
            return Math.round(this.voteAverage / 2)
        }
    },
}
</script>

<template>
    <div class="flip-card" @click="getCastApi(), getMovieGenres()" @mouseleave="emptyCastAndGenres()">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="imgPath" 
                    :alt="titleOrName"
                    class="img-fluid">
            </div>
            <div class="flip-card-back px-3 py-4 overflow-y-auto">
                <div>
                    Titolo: {{ titleOrName }}
                </div>
                <div v-if="titleOrName != originalTitleOrName">
                    Titolo originale: {{ originalTitleOrName }}
                </div>
                <p class="mb-0">
                    Voto : 
                    <i v-for="i in roundVote" class="rate-stars fa-solid fa-star"></i>
                    <i v-for="j in (5 - roundVote)" class="fa-regular fa-star"></i>
                </p>
                <p class="">Descrizione: {{ overview }}</p>
                <div>
                    <img :src="'../src/assets/img/' + originalLanguage + '.png'" :alt="originalLanguage">
                </div>
                <div>
                    <p class="mb-0 fw-bold">Cast :</p>
                    <div v-for="(actor, i) in store.actors">
                        <p class="mb-0 p-1">
                            {{ actor }}
                        </p>
                    </div>
                </div>
                <div>
                    <p class="mb-0 fw-bold">Genere:</p>
                    <div v-for="(elem, i) in this.singleMovieGenres">       
                        <p class="mb-0 p-1">
                            {{ elem }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.rate-stars{
    color: yellow;
}
.img-fluid{
    height: 100%;
}
.flip-card {
    background-color: transparent;
    perspective: 1000px; /* 3D effect */
    border: 1px solid white;
    .flip-card-inner {
        position: relative;
        transition: transform 1.5s;
        transform-style: preserve-3d;
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
    }
}


/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */

</style>
