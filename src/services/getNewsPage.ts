import { fetchAPI } from '@/utils/fetch-api'

const getProjectTypesPage = async () => {
  try {
    const path = `/news-page`
    const urlParamsObject = {
      populate: {
        bigImage: {
          populate: '*',
        },
        news: {
          populate: {
            data: {
              populate: {
                attributes: {
                  populate: {
                    images: { populate: '*' },
                  },
                },
              },
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

export default getProjectTypesPage
