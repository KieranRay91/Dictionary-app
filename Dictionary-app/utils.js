import axios from "axios";

const dictionaryApi = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
});

export function fetchWordDefinition(word) {
  return dictionaryApi.get(`/${word}`).then((res) => {
    return res.data;
  });
}
