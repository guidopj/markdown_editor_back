const File = require("../models/file");


/* CREATE NEW FILE */
function createFile(req, res){
  const file = new File({
    fileName: req.body.fileName,
    fileTitle: req.body.fileTitle,
    fileDescription: req.body.fileDescription,
  });

  if(!file.fileName){
    res.status(400).send({message: 'the name of the file is required'})
  }else if(!file.fileTitle){
    res.status(400).send({message: 'the title of the file is required'})
  }else if(!file.fileDescription){
    res.status(400).send({message: 'thie description of the file is required'})
  }

  file.save(error => {
    if(error){
      res.status(500).send({messsage:`An error occurred attempting to create the new file. ${error}`});
    }
    res.status(200).send({message: 'the new file was saved correctly', file});
  });

}

/* GET ALL FILES */
function getFiles(req, res){

  File.find({}, (error, result) => {
      if(error || !result){
        res.status(404).send({messsage:'No files have been found.'});
      }

      res.status(200).send({result});
  }).catch(error => {
    res.status(500).send({ message: 'An error have been ocurred while getting all the files.', error });
  });
}


/* UPDATE SPECIFIC FILE */
function updateFile(req, res){
  const id = req.params.id;
  const fileTitle = req.body.fileTitle;
  const fileName = req.body.fileName;
  const fileDescription = req.body.fileDescription;

  File.findOne({ _id: id }).then((file) => {
    if(!file._id){
      res.status(400).send({ message: 'Id hasn´t been found.' });
    }
    
    file.fileTitle = fileTitle;
    file.fileName = fileName;
    file.fileDescription = fileDescription;
    

    file.save().then(() => {
      res.status(200).send({ message: "The file has been updated correctly.", file });
    });
  }).catch(error => {
    res.status(500).send({ message: 'An error has been raised while attempting to update the file.', error });
  });
}

function deleteFile(req, res){
  const file = {
    _id: req.params.id
  }
  File.deleteOne(file, (error) => {
    if (error){
      res.status(500).send({messsage:`An error has been raised while attempting to delete the file. ${error}`});
    }
    res.status(200).send({ message: 'The file has been deleted correctly.' });
  });
}

module.exports = {
    createFile,
    getFiles,
    updateFile,
    deleteFile
};