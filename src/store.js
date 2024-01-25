import { reactive } from 'vue';

export const store = reactive ({
    baseUrlFilms: 'https://api.themoviedb.org/3/search/movie',
    baseUrlSeries : 'https://api.themoviedb.org/3/search/tv',
    apiKey: '0e5d99b3ddd0d04bd378e05170f51804',
    queryFilm: '',
    films:[],
    series:[],
    genres: [],
    filteredGenres: [],
    selectedGenres: ''
    
})