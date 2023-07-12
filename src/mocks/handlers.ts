import { rest } from "msw";

export const handlers = [
  rest.get("https://api.websitecarbon.com/site", (req, res, context) => {
    const params = req.url.searchParams;
    const url = params.get("url");

    if (url == "a.com") {
      return res(
        context.delay(1000),
        context.status(200),
        context.json({
          url: "https://www.websitecarbon.com/website/websitecarbon-com/",
          green: true,
          bytes: 680321,
          cleanerThan: 0.86,
          statistics: {
            adjustedBytes: 513642.355,
            energy: 0.0003874770435970277,
            co2: {
              grid: {
                grams: 0.17126485326988625,
                litres: 0.0952575113887107,
              },
              renewable: {
                grams: 0.14848120310638102,
                litres: 0.0825852451677691,
              },
            },
          },
          timestamp: 1688956607,
        })
      );
    } else if (url == "b.com") {
      return res(
        context.status(200),
        context.json({
          url: "https://www.websitecarbon.com/website/websitecarbon-com/",
          green: false,
          bytes: 680321,
          cleanerThan: 0.36,
          statistics: {
            adjustedBytes: 513642.355,
            energy: 0.0003874770435970277,
            co2: {
              grid: {
                grams: 0.77126485326988625,
                litres: 0.0952575113887107,
              },
              renewable: {
                grams: 0.14848120310638102,
                litres: 0.0825852451677691,
              },
            },
          },
          timestamp: 1688956607,
        })
      );
    }

    return res(context.status(500), context.json({}));
  }),
];
