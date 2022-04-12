
// 테스트를 위한 목업 API

import type { NextApiRequest, NextApiResponse } from 'next'

interface Response {
  isUserBlocked: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(200).json({ isUserBlocked: false })
}