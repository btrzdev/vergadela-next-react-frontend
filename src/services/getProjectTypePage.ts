import { fetchAPI } from '@/utils/fetch-api'

const getProjectTypesPage = async () => {
  try {
    const path = `/project-types-page`
    const urlParamsObject = {
      populate: {
        cardType: {
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
export default getProjectTypesPage
