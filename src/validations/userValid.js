const verifyDisplayName = (disName) => {
  if (disName.length < 8) {
  return true;
  }
};

const verifyEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  const verifRegex = regex.test(email);
  return verifRegex;
};

const verifyPassword = (password) => {
  if (password.length < 6) {
    return true;
  }
};

module.exports = { verifyDisplayName, verifyPassword, verifyEmail };