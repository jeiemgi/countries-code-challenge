import {API_URL} from "~/js/constants";
import axios from "axios";

export const fetchCountry = async (value: string) => {
    return await axios.get(`${API_URL}/name/${value}?fields=name,flag,cca2`);
}
