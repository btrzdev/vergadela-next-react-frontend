import { fetchAPI } from '@/utils/fetch-api'

const getNews = async () => {
  try {
    const path = `/news`
    const urlParamsObject = {
      populate: {
        preview: {
          populate: '*',
        },
      },
    }

    const responseData = await fetchAPI(path, urlParamsObject)
    return responseData
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getNews
