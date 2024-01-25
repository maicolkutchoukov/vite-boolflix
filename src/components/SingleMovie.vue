<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
        };
    },
    methods: {
    },
    props:{
        titleOrName : String,
        originalTitleOrName : String,
        voteAverage : Number,
        originalLanguage: String,
        overview : String,
        posterPath: String,
    }
}
</script>

<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img v-if="posterPath != null" 
                    :src="'https://image.tmdb.org/t/p/w342/' + posterPath + '.jpg'" 
                    :alt="titleOrName"
                    class="img-fluid">
                <img v-else 
                    :src="'https://i.pinimg.com/474x/0c/4c/0c/0c4c0caccba6d36fe55a366782ace08b.jpg'" 
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
                <p class="mb-0">Voto : 
                    <i v-for="(star, i) in Math.round(voteAverage / 2)" class="rate-stars fa-solid fa-star"></i>
                    <i v-for="(star, i) in 5 - Math.round(voteAverage / 2)" class="fa-regular fa-star"></i>
                </p>
                <p class="">Descrizione: {{ overview }}</p>
                <div>
                    <img :src="'../src/assets/img/' + originalLanguage + '.png'" :alt="originalLanguage">
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
