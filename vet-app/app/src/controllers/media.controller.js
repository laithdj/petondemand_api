const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { mediaService, emailService } = require('../services');
var path = require('path');


const createMedia = catchAsync(async (req, res) => {
  const mediaUpsertData = {
    name: req.file.filename,
    fileName: req.file.originalname,
    mimeType: req.file.mimetype,
    destination: req.file.destination
  };
  if (req.body.image) {
    const media = await mediaService.updateMedia(mediaUpsertData, req.body.user_id, req.body.image);
    res.status(httpStatus.CREATED).send(media);
    return;  
  }
  const media = await mediaService.createMedia(mediaUpsertData, req.body.user_id);
  res.status(httpStatus.CREATED).send(media);
});
const getMedia = catchAsync(async (req, res) => {
  if (!req.params.mediaType || !req.params.mediaId) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'These params are required!');
  }
  const mediaData = await mediaService.getMediaById(req.params.mediaId);
  if (!mediaData) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Media not found');
  }
  const fileDestination = `${mediaData.destination}/${mediaData.name}`;
  // res.sendFile(`../../${fileDestination}`, { root: __dirname });
  res.sendFile(path.resolve(path.join(__dirname, `../../${mediaData.destination}/${mediaData.name}`)));
});
const testSMTP = catchAsync(async (req, res) => {
  await emailService.sendBookingConfirmationEmail(`jane.d@mailinator.com`)
  const data = { smtpStatus: true };
  res.status(httpStatus.OK).send(data);
});

module.exports = {
  createMedia,
  getMedia,
  testSMTP
};
