import qs from 'qs'
import axios from 'axios'
import { getStrapiURL } from './api-helpers'

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  const TOKEN =
    'b00fa89b887e11d2075b8c928be378e364a266886da78b7a6c6fdd0da9d81fc8ebf8187115e613d438cf63688a5a3cc3e6c87b676833bd24cc12ce8ec058b001e559a2ead15b9d288cfce6c83017dc1703c81f7354a51adb3a8d23a14520eab86a60b3f1b944af77ad169f349815ae6398ac763228250d8f94b1edcd114caff0'
  try {
    // Merge default and user options
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
      cache: 'no-store',
      next: { revalidate: 0 },
      ...options,
    }

    // Build request URL
    const queryString = qs.stringify(urlParamsObject)
    const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`

    // Trigger API call
    const response = await axios.get(requestUrl, mergedOptions)
    return response
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    )
  }
}
