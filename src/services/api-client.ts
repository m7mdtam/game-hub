import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b97693af95f545ea9d6fbe6e065b7aa5",
  },
});
