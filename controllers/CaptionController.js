const axiosCaption = require('../APIs/axiosCaption')

class CaptionController{
    static detectLanguage(req,res,next){
        const text = req.body.text
        let params = {
            key : process.env.API_KEY_YD,
            text
        }
        axiosCaption({
            method : "POST",
            url : "/detect",
            params,
        })
        .then((response)=>{
            const lang = `${response.data.lang}-en`
            params = {
                key : process.env.API_KEY_YD,
                text,
                lang
            }
            return axiosCaption({
                method : "POST",
                url : "/translate",
                params,
            })
        })
        .then((response)=>{
            res.status(200).json(response.data)
        })
        .catch(next)
    }
}
module.exports = CaptionController