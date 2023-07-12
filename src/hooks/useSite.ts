import { useQuery } from "@tanstack/react-query";
import { retrieveSite } from "../api";
import { Site } from "../entities.ts";

const useSite = (url: string) =>
  useQuery<Site>({
    queryKey: ["site"],
    queryFn: () => retrieveSite(url),
    enabled: false,
  });

export default useSite;
