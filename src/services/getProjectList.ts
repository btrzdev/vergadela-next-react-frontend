import { fetchAPI } from '@/utils/fetch-api'

const getProjectList = async () => {
  try {
    const path = `/projects`
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

    const responseData = await fetchAPI(path, urlParamsObject)
    return responseData
  } catch (error) {
    console.error(error)
    throw error
  }
}
export default getProjectList
