const express = require('express');
const {mediaController} = require('../../controllers');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = `./public/vendor`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    const fileExt = path.extname(file.originalname);
    cb(null, `${fileName}${fileExt}`);
  }
});
const upload = multer({ storage: storage })

router
    .route('/create/:mediaType')
    .post(upload.single('file'), mediaController.createMedia);
router
    .route('/getFile/:mediaType/:mediaId')
    .get(mediaController.getMedia);

  router
    .route('/test-smtp')
    .get(mediaController.testSMTP);
    

module.exports = router;