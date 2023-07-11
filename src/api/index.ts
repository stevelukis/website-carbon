import axios from "axios";
import { Site } from "../entities.ts";

const client = axios.create({ baseURL: "https://api.websitecarbon.com" });

export const retrieveSite = async (url: string) => {
  const response = await client.get<Site>("/site?url=" + url);
  return response.data;
};
