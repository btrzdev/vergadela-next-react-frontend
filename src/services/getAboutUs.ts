import { fetchAPI } from '@/utils/fetch-api'
import { populate } from 'dotenv'

const getAboutUs = async () => {
  try {
    const path = `/about-us`
    const urlParamsObject = {
      populate: {
        hero: {
          populate: '*',
        },
        team: { populate: { teamMember: { populate: '*' } } },
        chronology: {
          populate: {
            items: {
              populate: '*',
            },
          },
        },
        partinershipSection: {
          populate: {
            partinership: {
              populate: {
                image: {
                  populate: '*',
                },
              },
            },
          },
        },
        recentsProjects: {
          populate: {
            project: {
              populate: {
                image: {
                  populate: '*',
                },
              },
            },
          },
        },
        curiositySection: {
          populate: {
            curiosity: {
              populate: {
                image: {
                  populate: '*',
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
export default getAboutUs
