import type { NextApiRequest, NextApiResponse } from 'next'

type Test = {
  content: string
}

export default async (_req: NextApiRequest, res: NextApiResponse<Test[]>) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  res.status(200).json([{ content: 'test 1' }, { content: 'test 2' }])
}
