import { fetchAPI } from '@/utils/fetch-api'

const getProjectType = async () => {
  try {
    const path = `/project-types`
    const urlParamsObject = {
      populate: {
        cardImg: {
          populate: '*',
        },
        project_types: {
          populate: '*',
        },
        heroCoverImg: {
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
export default getProjectType
