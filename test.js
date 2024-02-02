<<<<<<< HEAD
function sortStrings(a, b) {
    const string1 = a.toLowerCase();
    const string2 = b.toLowerCase();
  
    if (string1 < string2) return -1;
    if (string1 > string2) return 1;
    return 0;
  }
  
  const arrayOfTitles = movies.map((movie) => movie.title);
  const sortedArrayOfTitles = arrayOfTitles.sort(sortStrings);
  
  showContent(10, sortedArrayOfTitles);
=======
console.clear();


>>>>>>> 6ad2ac1e7351351b53e2993c92817bf6c1796ab0
