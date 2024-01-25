<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
            nav:[
                'Home',
                'Serie Tv',
                'Film',
                'Nuovi e popolari',
                'La mia lista',
                'Sfoglia per lingua',
            ],
            dropdownUsers:[
                'Maicol',
                'Bambini',
                'User 2'
            ],
            activeUser: '0',
            searchFlag : false
        };
    },
    methods:{
        activeSearch(){
            this.searchFlag = true
        }
    }
}
</script>

<template>
    <header>
        <div class="container-fluid text-white">
            <div class="row align-items-center">
                <div class="col-8">
                    <div class="row align-items-center">
                        <div class="col-2">
                            <img class="img-fluid"
                            src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png" alt="Netflix">
                        </div>
                        <div class="col-10 ">
                            <nav>
                                <ul class="list-inline m-0">
                                    <li class="list-inline-item"
                                    v-for="(elem, i) in nav">
                                        <a :class="{'active-link': i == 0}" 
                                        href="#">
                                            {{ elem }}
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    
                </div>
                <div class="col-4 text-end d-flex align-items-center justify-content-end">
                    <div v-if="searchFlag" class="search-container">
                        <input type="text" placeholder="Inserisci titolo..."
                          class="input-search"
                          v-model="store.queryFilm" 
                          @keyup.enter="
                            $emit('search'), 
                            searchFlag = false, 
                            store.queryFilm = ''">
                        
                    </div>
                    <i @click="activeSearch()" 
                    v-if="!(searchFlag)" class="fa-solid fa-magnifying-glass"></i>
                    
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header{
    .container-fluid{
        background-color: #000000;
        ul{
            a{
                text-decoration: none;
                color: grey;
                font-size: 14px;
                padding: 5px;
                &:hover{
                    color:lightgray
                }
            }
            .active-link{
                color: white;
            }
        }
        .input-search{
            background-color: #000000;
            color: white;
            border: 1px solid white;
            padding: 2px 8px;
            border-radius: 5px;
        }
    }
}
</style>
