const multer = require("multer");
const fs = require("fs");
const path = require("path");


const isImageFile = function (file) {
  const allowedExtensions = [".png", ".jpg", ".jpeg"];
  const ext = path.extname(file.originalname);
  return allowedExtensions.includes(ext);
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadDir;
     if (isImageFile(file)) {
      uploadDir = "public/images";
    } else {
      return cb(new Error("Invalid file type"));
    }
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 500 * 1024 * 1024,
  },
});

const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: "Multer error: " + err.message });
  } else if (err) {
    return res.status(500).json({ error: err.message });
  }
  next();
};

module.exports = {
  upload,
  handleMulterError,
};
