import { fetchAPI } from '@/utils/fetch-api'

export const getServices = async () => {
  try {
    const path = `/services`
    const urlParamsObject = {
      populate: '*',
    }

    const responseData = await fetchAPI(path, urlParamsObject, {
      nextRevalidate: 60,
    })

    // console.log('Response Data', responseData)
    if (responseData.data) {
      return responseData.data
    }
    return null
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getServices
