import { fetchAPI } from '@/utils/fetch-api'

const getServicePage = async () => {
  try {
    const path = `/services-page`
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
export default getServicePage
