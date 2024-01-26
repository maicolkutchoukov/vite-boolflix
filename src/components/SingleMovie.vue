<script>
import { store } from '../store.js';
import axios from 'axios'
export default {
    data() {
        return {
            store,
            actors:[]
        };
    },
    methods: {
        /* getCastApi(){
            for (let i = 0; i < store.idSerie.length; i++) {
                const elem = store.idSerie[i];
                console.log(elem)
                axios.get('https://api.themoviedb.org/3/tv/' + elem + '/credits?', {
                    params: {
                        api_key : store.apiKey,
                        language: 'it',
                        query: store.queryFilm
                    }
                })
                .then((response) => {
                    console.log(response.data.cast)
                    let cast = response.data.cast
                    
                    for (let i = 0; i < 5; i++) {
                        const element = cast[i].name;
                        store.cast.push(element)
                        console.log('nome', element)
                        console.log('store.cast', store.cast)
                    }
                    
                })
            }
        } */
        getCastApi(){
            // CAST DEI SINGOLI FILM
            console.log('entra')
            const urlActorsFilm = "https://api.themoviedb.org/3/movie/"+ this.idMovie +"/credits?api_key=" + store.apiKey
                axios.get(urlActorsFilm)
                .then((response) => {
                    for (let i = 0; i < 5; i++) {
                        this.actors.push(response.data.cast[i].name)
                        console.log(this.actors)
                    }
                })
                const urlActorsSerie = "https://api.themoviedb.org/3/tv/"+ this.idSerie +"/credits?api_key=" + store.apiKey
                axios.get(urlActorsSerie)
                .then((response) => {
                    for (let i = 0; i < 5; i++) {
                        this.actors.push(response.data.cast[i].name)
                        console.log(this.actors)
                    }
                })
            
        },
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
        movieCast: Array
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
    }
}
</script>

<template>
    <div class="flip-card" @click="getCastApi()">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="imgPath" 
                    :alt="titleOrName"
                    class="img-fluid">
            </div>
            <div class="flip-card-back px-3 py-4 overflow-y-auto">
                <div>
                    Titolo: {{ titleOrName }} {{ idMovie }}
                </div>
                <div v-if="titleOrName != originalTitleOrName">
                    Titolo originale: {{ originalTitleOrName }}
                </div>
                <p class="mb-0">Voto : 
                    <i v-for="i in roundVote" class="rate-stars fa-solid fa-star"></i>
                    <i v-for="j in (5 - roundVote)" class="fa-regular fa-star"></i>
                </p>
                <p class="">Descrizione: {{ overview }}</p>
                <div>
                    <img :src="'../src/assets/img/' + originalLanguage + '.png'" :alt="originalLanguage">
                </div>
                <div>
                    <!-- <p @click="getCastApi()">
                        Cast
                    </p> -->
                    <p v-for="(actor, i) in this.actors">
                        {{ actor }}
                    </p>
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

.col-2{
    height: 100%;
}
.flip-card {
    background-color: transparent;
    perspective: 1000px; /* 3D effect */
    border: 1px solid white;
}
.flip-card-inner {
    position: relative;
    transition: transform 1.5s;
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
