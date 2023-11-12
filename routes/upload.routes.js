const upload = require('../config/s3.config');

app.post('/upload', upload.single('myFile'), (req, res) => {
    // req.file contiene la información del archivo subido
    if (!req.file) {
        return res.status(400).send('No se subió ningún archivo.');
    }

    // El archivo ya ha sido subido a S3, puedes obtener su URL y otros datos aquí
    const file = req.file;
    const url = file.location; // La URL del archivo en S3

    // Haz algo con la URL, como enviarla de vuelta al cliente o guardarla en una base de datos
    res.send({ message: 'Archivo subido con éxito', url: url });
});

