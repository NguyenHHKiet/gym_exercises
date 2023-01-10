export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const exercisesOptions = {
  method: "GET",
  headers: {
    // instead of process.env
    // import.meta.env
    "X-RapidAPI-Key": "9e5e31e78dmshb9ff2979ca5d1afp18ac02jsn3356fbf0ee59",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
  }
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85"
  }
};
