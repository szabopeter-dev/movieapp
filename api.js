const movieForm = document.querySelector('form');
const main = document.querySelector('section');

//key to the API
const key = 'f3085acf9b6718639348425bf087fffd';
const imageurl = 'https://image.tmdb.org/t/p/w500';



const getMovies = async (film) => {

        const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${film}`;
        const response = await fetch(endpoint)
        const data = response.json();
        
        return data;
             
}

movieForm.addEventListener('submit', e => {
    e.preventDefault();

    const movie = movieForm.movie.value.trim();
    
    movieForm.reset();
    
    
    if(movie){
        getMovies(movie).then(data => { 
            const results = data.results;
            console.log(results);
                 results.map(result => {
                //console.log(result.poster_path, result.id);
                
                const output = 
                `
                <div>
                <img src="${imageurl + result.poster_path}">
                </div>
                `
                
                main.innerHTML = output; 
                console.log(output);                
                }) 


                /* for (i = 0; i < results.length; i++) {
                    const output =  `
                    <div>
                        <img src="${imageurl + results.poster_path}">
                    </div>`;
                    main.innerHTML = output;
                    console.log(output);
                  }
 */
                  
        })
    }
})










