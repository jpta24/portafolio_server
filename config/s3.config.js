require('dotenv').config();
// const { S3Client, PutObjectCommand, GetObjectCommand } = require('aws-sdk/client-s3')
// const fs = require('fs')
const { S3Client } = require('aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');

const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;
const AWS_PUBLIC_KEY = process.env.AWS_PUBLIC_KEY;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;

// const client = new S3Client({ region: AWS_BUCKET_REGION,
//     credentials: {
//         accessKeyId:AWS_PUBLIC_KEY,
//         secretAccessKey:AWS_SECRET_KEY
//     }
// });

// const uploadFile= async (file)=>{
//     const stream = fs.createReadStream(file.tempFilePath)
//     const uploadParams = {
//         Bucket: AWS_BUCKET_NAME,
//         Key:file.name,
//         Body:stream
//     }
//     const command = new PutObjectCommand(uploadParams)
//     return await client.send(command)
// }

// const readFile = async (fileName)=>{
//     const command = new GetObjectCommand({
//         Bucket: AWS_BUCKET_NAME,
//         Key:fileName,
//     })

//     const result = await client.send(command)

//     result.Boby.pipe(fs.createWriteStream('./images/newimage.png'))

//     fs.createReadStream(result)
//     return
// }

// module.exports = {
//     uploadFile,readFile,
// }

// ------------------- NEW METHOD -------------------
// Configuración de Multer
// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage });

// AWS S3
const clientS3 = new S3Client({
	region: AWS_BUCKET_REGION,
	credentials: {
		accessKeyId: AWS_PUBLIC_KEY,
		secretAccessKey: AWS_SECRET_KEY,
	},
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new Error('Tipo de archivo no permitido'), false);
    }
};

const storage = multerS3({
	s3: clientS3,
	bucket: AWS_BUCKET_NAME,
	key: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

module.exports = multer({ storage, limits: { fileSize: 3 * 1024 * 1024 },fileFilter });