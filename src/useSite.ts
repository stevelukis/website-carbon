import { useQuery } from "@tanstack/react-query";
import { retrieveSite } from "./api.ts";
import { Site } from "./entities.ts";

const useSite = (url: string) =>
  useQuery<Site>({
    queryKey: ["site", url],
    queryFn: () => retrieveSite(url),
  });

export default useSite;
