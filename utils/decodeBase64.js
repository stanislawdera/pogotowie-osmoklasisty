const decodeBase64 = (data) => {
  let buff = new Buffer.from(data, "base64");
  return buff.toString("ascii");
};

export default decodeBase64;
