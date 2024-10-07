import { fetchAPI } from '@/utils/fetch-api'

export const getContactPage = async () => {
  try {
    const path = `/contact-page`
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

export default getContactPage
