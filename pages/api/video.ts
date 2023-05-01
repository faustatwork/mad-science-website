import { NextApiRequest, NextApiResponse } from "next";
import { createReadStream } from "fs";
import { pipeline } from "stream";
import { promisify } from "util";

const pipelineAsync = promisify(pipeline);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).send("Method Not Allowed");
  }

  const filePath = "../../private/videos/video.mp4";

  // Set the Content-Type header based on the file extension
  const contentType = getContentType(filePath);
  res.setHeader("Content-Type", contentType);

  // Stream the file to the client
  const readStream = createReadStream(filePath);
  readStream.on("open", () => {
    // Only write to the response if it is still writable
    if (!res.writableEnded) {
      pipelineAsync(readStream, res).catch(err => {
        // eslint-disable-next-line no-console
        console.error("Pipeline error:", err);
        res.status(500).end("Internal Server Error");
      });
    }
  });
  readStream.on("error", err => {
    // eslint-disable-next-line no-console
    console.error("ReadStream error:", err);
    res.status(500).end("Internal Server Error");
  });
}

function getContentType(filePath: string) {
  switch (filePath.split(".").pop()) {
    case "mp4":
      return "video/mp4";
    case "webm":
      return "video/webm";
    default:
      return "application/octet-stream";
  }
}
