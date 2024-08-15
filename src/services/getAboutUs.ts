import { fetchAPI } from '@/utils/fetch-api'

const getAboutUs = async () => {
  try {
    const path = `/about-us`
    const urlParamsObject = {
      populate: '*',
    }
    const responseData = await fetchAPI(path, urlParamsObject)
    return responseData
  } catch (error) {
    console.error(error)
    throw error
  }
}
export default getAboutUs
