const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const vendorRoute = require('./vendors.route');
const servicesRoute =require('./services.route');
const freeslotsRoute = require('./freeslots.route');
const offerServiceRoute = require('./offerServices.route');
const petsRoute = require('./pets.route');
const mediaRoute = require('./media.route');
const breedTypeRoute = require('./breedTypes.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/vendors',
    route: vendorRoute,
  },
  {
    path: '/services',
    route: servicesRoute,
  },
  {
    path: '/offer_Services',
    route: offerServiceRoute,
  },
{
  path: '/freeslots',
  route: freeslotsRoute,
},
{
  path: '/pets',
  route: petsRoute,
},
{
  path: '/media',
  route: mediaRoute,
},

{
  path: '/breedType',
  route: breedTypeRoute,
}

 
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
