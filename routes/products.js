const express = require('express');
app = express();

const {Router} = express;
const router = new Router();

app.use (express.json());
app.use(express.urlencoded({extended: true}));


let arr = require("../arr.json");
let id = 0;
app.use("/static", express.static(__dirname  + "/public"));

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

router.get("/prodAll", (req, res) => {
    res.send({ data: arr });
})

router.get("/:id", (req, res) => {
    let { id } = req.params;
    let prod = arr.filter((x) => {
        return x.id == id
    })
    try{
        res.send({ prod });
    } catch (e) {
        res.send({ message: "No existe el producto" });
    };
})

router.post("/", (req, res) => {
  const {body} = req;
  const newObj = {
      ...body,
      id: ++id
  }
    arr.push(console.log(newObj));
    res.send(newObj);
});

router.delete("/id", (req, res) => {
    let newArr = arr.filter((x) => {
        return x.id != req.params.id
    });
});
router.put("/:id", (req, res) => {
    let index = arr.findIndex((x) => {
        return x.id == req.params.id
    })
    arr[index] = req.body;
    res.send({index});
});
module.exports = router; 