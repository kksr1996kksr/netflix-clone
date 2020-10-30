import axios from 'axios';

const instance = axios.create({                 // axios gives us this special method
    baseURL: "http://api.themoviedb.org/3",
});

// whenever we now do
// instance.get('/foo-bar'); // we are actually doing http://api.themoviedb.org/3/foo-bar

export default instance;