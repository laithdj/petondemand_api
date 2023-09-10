const httpStatus = require('http-status');
const { Media } = require('../models');
const ApiError = require('../utils/ApiError');
const { userService } = require('.');
const fs = require('fs');

/**
 * Create a media
 * @param {Object} mediaBody
 * @param {String} userId
 * @returns {Promise<Media>}
 */
const createMedia = async (mediaBody, userId) => {
  const mediaInsert = await Media.create(mediaBody);
  console.log('mediaInsert', mediaInsert);
  if (mediaInsert.id) {
    const user = await userService.getUserById(userId);
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    Object.assign(user, { image: mediaInsert.id });
    const userData = await user.save();
    console.log('userData', userData);
  }
  return mediaInsert;
};

/**
 * Update a media
 * @param {Object} mediaBody
 * @param {String} userId
 * @param {String} mediaId
 * @returns {Promise<Media>}
 */
const updateMedia = async (mediaBody, userId, mediaId) => {
  console.log('updateMedia cALLED.');
  const media = await getMediaById(mediaId);
  if (!media) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Media not found');
  }
  const mediaFileName = `${media.destination}/${media.name}`;
  Object.assign(media, mediaBody);
  const mediaSaveData = await media.save();
  if (mediaSaveData.id) {
    fs.unlinkSync(`${mediaFileName}`);
  }
  return media;
};

/**
 * Get media by id
 * @param {ObjectId} id
 * @returns {Promise<Media>}
 */
const getMediaById = async (id) => {
  return Media.findById(id);
};

module.exports = {
  createMedia,
  getMediaById,
  updateMedia
};
