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
            .then(({ data })=>{
                res.status(200).json(data)
            })
            .catch(next)
    }

    static translateLanguange(req, res, next) {
        const { language } = req.body
        const lang = `${lang}-en`
            params = {
                key : process.env.API_KEY_YD,
                text,
                lang
            }
        axiosCaption({
            method : "POST",
            url : "/translate",
            params,
        })
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch(next)
    }
}
module.exports = CaptionController