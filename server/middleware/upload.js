const multer = require('multer');
const path = require('path');

// Only safe document and image files should be accepted.
const allowedMimeTypes = new Set([
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/webp',
]);

// Store files locally on disk
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // uploaded at the same millisecond will overwrite each other
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});

// filter file types to only allow PDFs and images
const fileFilter = (req, file, cb) => {
  if (allowedMimeTypes.has(file.mimetype)) {
    cb(null, true);
    return;
  }

  cb(new Error('Only PDF and image files are allowed.'));
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
