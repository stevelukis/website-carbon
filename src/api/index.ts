import axios from "axios";
import { Site } from "../entities.ts";

const client = axios.create({
  baseURL: "https://api.websitecarbon.com",
});

interface SiteResponse {
  url: string;
  c: number;
  p: number;
}

export const retrieveSite = async (url: string): Promise<Site> => {
  const response = await client.get<SiteResponse>("/b?url=" + url);
  return {
    url: response.data.url,
    cleanerThan: response.data.p,
    co2: response.data.c,
  };
};
