import { rest } from "msw";

export const handlers = [
  rest.get("https://api.websitecarbon.com/b", (req, res, context) => {
    const params = req.url.searchParams;
    const url = params.get("url");

    if (url == "a.com") {
      return res(
        context.delay(1000),
        context.status(200),
        context.json({
          url: "https://www.websitecarbon.com/website/websitecarbon-com/",
          c: 0.17126485326988625,
          p: 86,
        })
      );
    } else if (url == "b.com") {
      return res(
        context.status(200),
        context.json({
          url: "https://www.websitecarbon.com/website/websitecarbon-com/",
          c: 0.77126485326988625,
          p: 36,
        })
      );
    }

    return res(context.status(500), context.json({}));
  }),
];
