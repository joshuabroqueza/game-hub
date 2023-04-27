import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a5833c64f4244c8aa44310f98e3b67c8",
  },
});
