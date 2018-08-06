import axios from "axios";
import { APIkey, proxy } from "../config";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const data = await axios(
        `${proxy}https://food2fork.com/api/search?key=${APIkey}&q=${this.query}`
      );
      this.result = data.data.recipes;
    } catch (error) {
      console.log(error);
    }
  }
}
