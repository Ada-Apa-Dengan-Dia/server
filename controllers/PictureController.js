const Picture = require('../models/picture')
const axios = require('axios')
const FormData = require('form-data')
const pd = require('paralleldots')
pd.apiKey = process.env.API_KEY_PICTURE;

class PictureController {
    static getData(req,res,next){
        // const file_url=req.body.url;
        let type
        let link=req.body.url
        let finalLink

        if(link.indexOf('/?utm_source=ig_web_copy_link') > 0){
            let newLink = link.replace('/?utm_source=ig_web_copy_link','')
            finalLink = newLink + '/media/?size=l'
        }else{
            finalLink = link
        }
        
        pd.facialEmotion(finalLink,type='url')
        .then((response) => {
            res.status(200).json(JSON.parse(response));
        })
        .catch((error) => {
            next()
        })
    
        // // res.status(201).json('halo')    
        // console.log(req.body.url)
        // console.log('---------------')
        // console.log(process.env.API_KEY_PICTURE)
        
        // axios({
        //     method : 'POST',
        //     url : `https://apis.paralleldots.com/v4/facial_emotion`,
        //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        //     data : {
        //         url : req.body.url,
        //         api_key : req.body.api_key
        //     }
        // })
        // .then(function(response){
        //     console.log(response)
        //     res.status(200).json(response.data)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }

    static translateData(req,res,next){
        // console.log(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${process.env.API_KEY_TRANSLATE}&text=${req.body.text}&lang=id-en`)
        // console.log('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191128T102600Z.7b3842ab964bfe8b.a49f165b8fc5ccaa38f08989a84e77abfec9db2c&text=kenapa sih&lang=id-en')
        axios({
                method : 'POST',
                url : `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${process.env.API_KEY_TRANSLATE}&text=${req.body.text}&lang=id-en`,
                // data : {
                //     url : req.body.url,
                //     api_key : req.body.api_key
                // }
            })
            .then(function(response){
                console.log(response.data)
                res.status(200).json(response.data)
            })
            .catch(err => {
                console.log(err.message)
                next()
            })
    }

}

module.exports = PictureController