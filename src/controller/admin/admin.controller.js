const collections = require( "../../model/collections/colecctions.dao.js");
const express = require( "express");
const multer = require( "multer");
const path = require( 'path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join('public','uploads','images'))
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.fieldname}.png`)
    }
  })
  const upload = multer({storage:storage})

const adminController = express.Router()
adminController.get('/', (req, res ) => {
  if (req.isAuthenticated()) {
    let collectionsDatabase ;
    collections.getAll().then(res  => {
    collectionsDatabase = res})
    .finally( () => {
        res.render('admin',{collections:collectionsDatabase, user:true})
    })
      
  } else {
     res.redirect('/') 
  }
})

adminController.get('/addcollection', (req,res ) => {
    let user = false
    req.isAuthenticated() ?  user = true : user=false;
    res.render('admin',{collections:false,addcollection:true, user:user,upload:false})
})

adminController.post('/addcollection',upload.fields([{name:'collectionThumbnail', maxCount:2}, {name:'collectionCoverPage', maxCount:2}]), (req, res, next ) => {
   if (req.isAuthenticated()) {
       let user= true
       if (req.files) {
           try {
               let upload= false;
               let newCollection = {
                name:req.body.collectionName, 
                description:req.body.collectionDescription, 
                thumbnail: '/uploads/images/'+req.files.collectionThumbnail[0]['filename'],
                coverPage: 'uploads/images/'+req.files.collectionCoverPage[0]['filename'],
                products: {}
               }
               collections.save(newCollection)
                .finally( () =>{
                    upload= true;
                   res.render('admin',{collections:false,addcollection:true, user:user,upload:upload})
                   
                })
           } catch (error) {
               res.status(400).json({msg:error})
           }
       } else {
           res.redirect('/')
       }
   } else {
       res.redirect('/')
       
   }
})

  
module.exports = adminController