    import axios from "axios";
    const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'
  

    export const getPlacesData = async(sw,ne) => {
        try{
            const {data: {data}} = await axios.get(URL, {
                params: {
                    bl_latitude: sw.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                    tr_latitude: ne.lat,
                },
                headers: {
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                    'X-RapidAPI-Key': '4a497ea9e2mshe031268d7cfb132p13f4bdjsn0d1bd607acbf'
                }
                })
            return data;
        }
        catch(err) {
            console.log(err);
        }
    }