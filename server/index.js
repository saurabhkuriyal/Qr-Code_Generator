import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
const app = express();
const port = 3000;

const corsOptions={
    origin:"https://qr-code-generator-kuriyal.netlify.app/",
    method:"GET,POST,PUT,PATCH,DELETE,HEAD",
    credentials:true
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

import qr from "qr-image";

app.get("/", (req, res) => {
    res.send(<h1>Hello form server</h1>)
})

app.post("/submit", (req, res) => {
    const url = req.body.data;
    // const url=req.body.URL;
    const qr_svg = qr.imageSync(url, { type: 'svg' });

    //Convert QR code to base64 for embedding in the HTML
    const qr_base64 = Buffer.from(qr_svg).toString('base64');
    const qr_src = `data:image/svg+xml;base64,${qr_base64}`;
    // res.status(201).json({message:"Success"});
    // res.render("result.ejs", { src: qr_src });
    res.send({src: qr_src}).status(201);
});


app.listen(port, () => {
    console.log("QR generator server is running");
})
