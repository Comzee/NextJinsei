import { ResumeData } from '@/app/resumeData'

import { handleResumeUpdate } from '../utils'

export async function POST(request: Request) {
  const { education } = await request.json()
  return handleResumeUpdate(
    (data: ResumeData, { education }) => {
      data.education = education
    },
    { education },
  )
}
