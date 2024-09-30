import { fetchAPI } from '@/utils/fetch-api'

const getFooter = async () => {
  try {
    const path = `/footer`
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

export default getFooter
