const url = "http://www.omdbapi.com/?t=fast+%26+furious&apikey=89e4066e&";

const resultsContainer = document.querySelector(".results");

async function getMovies() {
    
    try {
        const response = await fetch(url);
        const results = await response.json()
        const facts = results.Title

        console.log(movie);

        resultsContainer.innerHTML = "";

        facts.forEach(function(movie) {
            
            resultContainer.innerHTML += `<div class=".results"> 
                                          <h3>${facts[i].Title}</h3>
                                           <p>Type: ${facts[i].Type}</p>
                                           <p>Year: ${facts[i].Year}</p>  
                                           <a href="details.html?i=${facts[i].imdbID}">Details</a>
                                            </div>`
        });
      
    } catch (error) {
          resultsContainer.innerHTML = "Whoopsie! Something went wrong here.";
        }
      }

getMovies();
      