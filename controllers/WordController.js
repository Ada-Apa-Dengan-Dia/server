const axiosWord = require('../APIs/axiosWord')
const FormData = require('form-data')

class EmotionAnalysis{
    static getEmotion(req,res,next){
        let fd = new FormData()
        const text = req.body.text
        const api_key = process.env.API_KEY_PD
        const lang_code = process.env.LANG_CODE
        fd.append("text",text)
        fd.append("api_key",api_key)
        fd.append("lang_code",lang_code)
        axiosWord({
            method : "POST",
            url : "/emotion",
            data : fd,
            headers: {
                'content-type': `multipart/form-data; boundary=${fd._boundary}`,
            },
        })
        .then((response) => {
            res.status(200).json(response.data)
        })
        .catch(next)
    }
}

module.exports = EmotionAnalysis