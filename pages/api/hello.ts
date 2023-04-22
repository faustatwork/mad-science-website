// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiResponse } from "next";

type Data = {
  vrijednost: string;
};

export default function handler(res: NextApiResponse<Data>) {
  res.status(200).json({ vrijednost: "Dobrodošli na Mad Science API :)" });
}
