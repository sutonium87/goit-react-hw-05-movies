// Import a list of genre names
import { genresNames } from './genres-names';

// This function takes an array of movie results and enhances their presentation.
export default function normalizedData(results) {
  return results.map(movie => {
    // Create an array of genre names using the createGenres function
    const genres = createGenres(genresNames, movie.genre_ids);
    // Get the first 3 genre names (or fewer) for display
    let listOfGenres = genres[0];

    // If there are more than 3 genres, combine the remaining genres into a single "Other" category
    if (listOfGenres.length > 3) {
      // Remove the 3rd to 7th genres from the list
      listOfGenres.splice(2, 5);

      // Create an "Other" genre object with an ID of 777
      let other = {
        id: 777,
        name: 'Other',
      };

      // Add the "Other" genre to the list
      listOfGenres.push(other);
    }

    // Create an object with the movie's data, including the enhanced genre list
    let objData = {
      ...movie,
      genres: listOfGenres,
    };

    return objData;
  });
}

// This function takes an array of genre names and a list of genre IDs and filters out matching genres.
function createGenres(arrayID, genresID) {
  let arrayOfGenres = [];
  return arrayID.map(element => {
    // Check if the genre IDs include the current genre
    if (genresID.includes(element.id)) {
      // Add the matching genre to the list
      arrayOfGenres.push(element);
    }
    return arrayOfGenres;
  });
}
// This module defines two functions, normalizedData and createGenres. normalizedData enhances the presentation of movie data by handling genre names and grouping genres into an "Other" category when there are more than 3.
//  createGenres filters out genres based on their IDs.If this module were not used, you would have to work with the raw, unmodified movie data, which might be less user - friendly and less informative
