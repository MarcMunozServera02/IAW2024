
import {baseUrl, API_KEY} from '../Constants/Constants'


export function getMoviesByCategory(path) {
    // eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs
    
    return fetch(baseUrl + '/'+path).then((result) => result.json());
  }

//
export function getVideos(id) {
    return fetch(baseUrl + `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
           .then((result) => result.json());
}