const axiosCaption = require('../APIs/axiosCaption')

class CaptionController{

    static detectLanguage(req,res,next){
        const text = req.body.text
        console.log(text)
        let data = {
            key : process.env.API_KEY_YD,
            text
        }
        console.log(data)
        axiosCaption({
            method : "POST",
            url : "/detect",
            params : data,
        })
        .then((response)=>{
            console.log(response.data,'===============================================================')
            console.log(response.data.lang, "bahasa apaaa???");
            
            // res.status(200).json(response.data)
            const lang = `${response.data.lang}-en`
            data = {
                key : process.env.API_KEY_YD,
                text,
                lang
            }
            return axiosCaption({
                method : "POST",
                url : "/translate",
                params : data
            })
        })
        .then((response)=>{
            console.log(response.data, "respon data")
            // console.log(response.data.text, "ini b.inggg nyaaa");
            
            res.status(200).json(response.data)
        })
        .catch(next)
        // .catch((err)=>{
        //     console.log(err)
        //     res.status(500).json(err)
        // })
    }

    // static translateLanguange(req, res, next) {
    //     const { language } = req.body
    //     const lang = `${language}-en`
    //         params = {
    //             key : process.env.API_KEY_YD,
    //             text,
    //             lang
    //         }
    //     axiosCaption({
    //         method : "POST",
    //         url : "/translate",
    //         params,
    //     })
    //         .then(({ data }) => {
    //             res.status(200).json(data)
    //         })
    //         .catch(next)
    // }
}
module.exports = CaptionController