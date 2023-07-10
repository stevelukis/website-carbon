import { Axios } from "axios";

const client = new Axios({ baseURL: "https://api.websitecarbon.com" });

export const retrieve = async () => {
  const response = await client.get("/site?url=a.com");
  return response.data;
};
