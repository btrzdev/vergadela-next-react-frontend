import { fetchAPI } from '@/utils/fetch-api'

export const getService = async (id: string | number | undefined) => {
  if (!id) {
    throw new Error('No ID provided')
  }
  try {
    const path = `/services/${id}`
    const urlParamsObject = {
      populate: '*',
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

export default getService
