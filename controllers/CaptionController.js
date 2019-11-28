const axiosCaption = require('../helpers/axiosCaption')

class CaptionController{
    static detectLanguage(req,res,next){
        const text = req.body.text
        const params = {
            key : process.env.API_KEY_YD,
            text
        }
        axiosCaption({
            method : "POST",
            url : "/detect",
            params,
        })
        .then((response)=>{
            res.status(200).json(response.data)
        })
        .catch(next)
    }
}
module.exports = CaptionController