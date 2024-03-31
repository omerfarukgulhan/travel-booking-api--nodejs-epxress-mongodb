const Review = require('../models/reviewModel');
const crudHandler = require('./crudHandler');

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = crudHandler.getAll(Review);
exports.getReview = crudHandler.getOne(Review);
exports.createReview = crudHandler.createOne(Review);
exports.updateReview = crudHandler.updateOne(Review);
exports.deleteReview = crudHandler.deleteOne(Review);
