import express, { query } from 'express'
import request from 'request'

const router = express.Router()


router.get("/", async (req, res) => {
    res.render("home")
})

router.get("/crop-recommend", async (req, res) => {
    res.render("crop-recommend")
})

router.get("/search", async (req, res) => {
    res.render("search")
})

router.get("/search-result", async (req, res) => {

    const { q } = req.query
    console.log(q)

    const data = JSON.stringify({
        cropname: q
    })

    console.log(data)
    
    request.post(
        'http://127.0.0.1:5000/crop-search',
        {
            json: data
        },

        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.render('search-result', { 
                    title: body['title'],
                    climate: body['climate'], 
                    scname: body['sc-name'], 
                    desc: body['desc'],
                    cult: body['cult']
                 })
            }
            else {
                console.log(error)
            }
        }
    );

})

router.get("/fertilizer", async (req, res) => {
    res.render("fertilizer")
})

router.get("/fertilizer-result", async (req, res) => {
    
        const { q } = req.query
        console.log(q)
    
        const data = JSON.stringify({
            key: q
        })
    
        console.log(data)
        
        request.post(
            'http://127.0.0.1:5000/fertilizer-key',
            {
                json: data
            },
    
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body)
                    res.render('fertilizer-result', { 
                        result: body['result']['result'], 
                        suggestion: body['result']['suggestion'] 
                     })
                }
                else {
                    console.log(error)
                }
            }
        );
    
})

router.get("/faqs", async (req, res) => {
    res.render("faqs")
})

router.get("/chat", async (req, res) => {
    res.render("chat")
})

router.get("/about", async (req, res) => {
    res.render("about")
})


router.get("/crop-result", async (req, res) => {
    const { q } = req.query

    const data = JSON.stringify({
        cropname: q
    })

    console.log(data)
    
    request.post(
        'http://127.0.0.1:5000/crop-search',
        {
            json: data
        },

        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                res.render('crop-result', { 
                    result: q,
                    cult: body['cult']
                 })
            }
            else {
                console.log(error)
            }
        }
    );
    
})

export default router
