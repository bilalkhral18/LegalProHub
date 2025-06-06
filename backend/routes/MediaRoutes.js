import express from 'express';
import multer from "multer";
import { uploadFile, deleteFile} from '../controllers/MediaController.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), uploadFile);
router.delete('/delete/:id', deleteFile);


export default router;
