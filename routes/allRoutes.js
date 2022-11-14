import express from 'express'
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

router.get("/search-result", async(req, res) => {
    res.render("search-result")
})

router.get("/fertilizer", async (req, res) => {
    res.render("fertilizer")
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

// router.post("/fertilizer", async (req, res) => {
//     const { nitrogen, phosphorous, pottasium, cropname } = req.body

//     const data = JSON.stringify({
//         nitrogen: nitrogen,
//         phosphorous: phosphorous,
//         pottasium: pottasium,
//         cropname: cropname
//     })

//     const payload = {key:null}

    
//     request.post(
//         'http://127.0.0.1:5000/fertilizer-predict',
//         {
//             json: data
//         },

//         function (error, response, body) {
//             if (!error && response.statusCode == 200) {
//                 console.log(body)
//                 res.render('fertilizer-result', { result: body })
//             }
//             else {
//                 console.log(error)
//             }
//         }
//     );

    
// })

router.get("/fertilizer-result", async (req, res) => {
    const q = req.params  
    res.render('fertilizer-result', { result: q })
})


router.get("/crop-result", async (req, res) => {
    const { q } = req.query
    res.render('crop-result', { result: q })
    // res.send("crop-result", result)
})

export default router
