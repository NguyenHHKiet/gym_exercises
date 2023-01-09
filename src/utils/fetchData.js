export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const exercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9e5e31e78dmshb9ff2979ca5d1afp18ac02jsn3356fbf0ee59",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com"
  }
};
