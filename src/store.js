import { reactive } from 'vue';

export const store = reactive ({
    baseUrlFilms: 'https://api.themoviedb.org/3/search/movie?api_key=0e5d99b3ddd0d04bd378e05170f51804',
    baseUrlSeries : 'https://api.themoviedb.org/3/search/tv?api_key=0e5d99b3ddd0d04bd378e05170f51804',
    apiKey: '?api_key=0e5d99b3ddd0d04bd378e05170f51804',
    queryFilm: '',
    films:[],
    series:[],
    AllSearch:[]
})