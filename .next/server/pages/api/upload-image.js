"use strict";
(() => {
var exports = {};
exports.id = 512;
exports.ids = [512];
exports.modules = {

/***/ 4608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ upload_image)
});

;// CONCATENATED MODULE: external "formidable"
const external_formidable_namespaceObject = require("formidable");
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: ./pages/api/upload-image.ts


// var mv = require("mv");
const config = {
    api: {
        bodyParser: false
    }
};
//@ts-ignore
/* harmony default export */ const upload_image = (async (req, res)=>{
    return new Promise(async (resolve, reject)=>{
        console.log(req.bodyParser, "its fields");
        if (req.method === "POST") {
            // parse form with a Promise wrapper
            const data = await new Promise((resolve, reject)=>{
                const form = new external_formidable_namespaceObject.IncomingForm();
                form.parse(req, (err, fields, files)=>{
                    if (err) return reject(err);
                    resolve({
                        fields,
                        files
                    });
                });
            });
            try {
                console.log({
                    data
                });
                const imageFile = data.files.image; // .image because I named it in client side by that name: // pictureData.append('image', pictureFile);
                const imagePath = imageFile.filepath;
                const pathToWriteImage = `public/${imageFile.newFilename}.png`; // include name and .extention, you can get the name from data.files.image object
                const image = await external_fs_namespaceObject.promises.readFile(imagePath);
                await external_fs_namespaceObject.promises.writeFile(pathToWriteImage, image);
                //store path in DB
                res.status(200).json({
                    message: "image uploaded!"
                });
            } catch (error) {
                res.status(500).json({
                    message: error.message
                });
                return;
            }
        }
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4608));
module.exports = __webpack_exports__;

})();