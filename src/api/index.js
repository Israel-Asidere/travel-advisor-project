import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data }
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
      headers: {
        'X-RapidAPI-Key': '70e0d10210msh811aacc75596cf5p1ca739jsndef28be51041',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    })

    return data
  } catch (error) {
    console.log(error)
  }
}
