// jshint esversion:6

// const getDate = () => {
//   let today = new Date();

//   let options = {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//   };

//   return today.toLocaleDateString("en-US", options);
// };

// const getDay = () => {
//   let today = new Date();

//   let options = {
//     weekday: "long",
//   };

//   return today.toLocaleDateString("en-US", options);
// };

// // module.exports = getDate;
// module.exports = { getDate, getDay };

exports.getDate = () => {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);
};

exports.getDay = () => {
  const today = new Date();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
