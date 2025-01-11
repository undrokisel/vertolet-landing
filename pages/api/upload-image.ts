import { IncomingForm } from "formidable";
// @ts-ignore
import Formidable, { File } from "formidable-serverless";
import { promises as fs } from "fs";
// var mv = require("mv");

export const config = {
  api: {
    bodyParser: false,
  },
};

//@ts-ignore
export default async (req, res) => {
  return new Promise(async (resolve, reject) => {
    console.log(req.bodyParser, "its fields");
    if (req.method === "POST") {
      // parse form with a Promise wrapper
      const data: any = await new Promise((resolve, reject) => {
        const form = new IncomingForm();
        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);
          resolve({ fields, files });
        });
      });

      try {
        console.log({ data });
        const imageFile = data.files.image; // .image because I named it in client side by that name: // pictureData.append('image', pictureFile);
        const imagePath = imageFile.filepath;
        const pathToWriteImage = `public/${imageFile.newFilename}.png`; // include name and .extention, you can get the name from data.files.image object
        const image = await fs.readFile(imagePath);
        await fs.writeFile(pathToWriteImage, image);
        //store path in DB
        res.status(200).json({ message: "image uploaded!" });
      } catch (error: any) {
        res.status(500).json({ message: error.message });
        return;
      }
    }
  });
};
