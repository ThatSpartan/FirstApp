const { PI } = Math;

const circle = r => PI * r ** 2;
const square = a => a ** 2;

module.exports = {circle, square};

/*
or export them individually

exports.circle = r => PI * r ** 2;
exports.square = a => a ** 2;
*/