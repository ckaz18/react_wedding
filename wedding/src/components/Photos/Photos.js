import React from "react";
import fs from'fs';
import { google } from 'googleapis';
import axios from "axios";

const scopes = ["https://www.googleapis.com/auth/drive.file"]
const Photos = () => {
    const [photos, setPhotos] = useState(null);

    if (photos) {
        var fileMetadata = {
            'name': 'photo.jpg'
          };
          // read from phone
          var media = {
            mimeType: 'image/jpeg',
            body: fs.createReadStream('files/photo.jpg')
          };
          
          drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id'
          }, function (err, file) {
            if (err) {
              // Handle error
              console.error(err);
            } else {
              console.log('File Id: ', file.id);
            }
          });
        await axios.post("https://www.googleapis.com/upload/drive/v3/files", {}, {
            uploadType: "resumable"
        })
    }
    return (
        <div >
            {/* <section className="main">Info</section> */}
        </div>
    );
};

export default (Photos);