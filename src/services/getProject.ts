import { fetchAPI } from '@/utils/fetch-api'
import { populate } from 'dotenv'

export const getProject = async (id: string | number | undefined) => {
  if (!id) {
    throw new Error('No ID provided')
  }
  try {
    const path = `/projects/${id}`
    const urlParamsObject = {
      populate: {
        hero: {
          populate: '*',
        },
        infoSection: {
          populate: {
            carrouselImages: {
              populate: '*',
            },
            details: {
              populate: '*',
            },
          },
        },
      },
    }

    const responseData = await fetchAPI(path, urlParamsObject, {
      nextRevalidate: 60,
    })

    console.log('Response Data', responseData)
    if (responseData.data) {
      return responseData.data
    }
    return null
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getProject