const fs = require('fs')

const { google } = require('googleapis')

const google_folder_id = '19gjL7jmQ0RMRi4EQm6UtfHZb8HUg1-4T'

async function uploadFile(){
    try{
        const auth = new google.auth.GoogleAuth({
            keyFile: '../content/key/psphotos-404313-ec5f744b88df.json',
            scopes: ['https://www.googleapis.com/auth/drive']
        })

        const driveService = google.drive({
            version: 'v3',
            auth
        })

        const fileMetaData = {
            'name': 'luyandra.jpg',
            'parents': [google_folder_id]
        }

        const media = {
            mimeType: 'image/jpg',
            body: fs.createReadStream('../content/img/Sem título.jpg')
        }

        const response = await driveService.files.create({
            resource: fileMetaData,
            media: media,
            field: 'id'
        })
        return response.data.id

    }catch(err){
        console.log('Upload file error', err)
    }
}

uploadFile().then(data => {
    console.log(data)
    //https://drive.google.com/uc?export=view&id=
})