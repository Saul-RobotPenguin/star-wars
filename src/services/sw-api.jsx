import axios from "axios";
export const fetchData = async () => {
  try {
    const response = await axios.get("https://swapi.dev/api/starships/");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching starships:", error);
    throw error;
  }
};
