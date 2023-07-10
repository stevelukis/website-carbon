import { handlers } from "./handlers.ts";
import { setupWorker } from "msw";

export const worker = setupWorker(...handlers);
