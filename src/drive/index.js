import {google} from 'googleapis'
import express from 'express'
import fs from 'fs'
import { file } from 'googleapis/build/src/apis/file'

const app = express()


const auth2Client = new google.auth.OAuth2({
    //client id
    // client secret
    // redirect url
})

// verifica as credenciais
try {
    const creds = fs.readFileSync("creds.json");
    auth2Client.setCredentials(JSON.parse(creds));
} catch (error) {
    console.log("No Creds found")
}

app.get("auth/google" , (req, res) =>{
    const url = auth2Client.generateAuthUrl({
        access_type: "offline",
        scope: ["https://googleapis.com/auth/user.info.profile",
         "https://www.googleapis.com/auth/drive",
        ],
    })

   // res.redirect(url);
})

// have
app.get("/auth/google/callback", async(req, res) =>{
  const {code} = req.query;
  const {tokens} = await auth2Client.getToken(code);
  auth2Client.setCredentials(tokens);
  fs.writeFileSync("creds.json", JSON.stringify(tokens));
  res.send("Sucess");
})

// for text
app.get('saveText/:sometext', async (req, res) => {
    const drive = google.drive({version: 'v3',
auth: auth2Client})

const sometext = req.params.sometext

 drive.files.create({
    requestBody:{
        name: test.txt,
        mimeType:'text/plain'
    },
    media:{
        mimeType: "text/plain",
        body:sometext,
    }
})
return "Sucess"
})


// for imagem

app.get('/saveImage', async(req, res) => {
    const drive = google.drive({version: 'v3',
auth: auth2Client})

drive.files.create({
    requestBody:{
        name: "nome da imagem",
        mimeType:"image/jpge"

    },
    media:{
        mineType:"image/jpge",
        body: fs.createReadStream("name.jpg")
    },
})

return "Sucess Image"
})
app.listen(8000, () =>{

})