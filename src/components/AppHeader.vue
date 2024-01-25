<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store
        };
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
                        <input type="text" placeholder="Inserisci titolo..." 
                        v-model="store.queryFilm" 
                        @keyup.enter="$emit('search')">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
</style>
