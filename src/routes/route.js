const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/movies', function (req, res) {
    let movie = [ 'The Conjuring', 'The Excorcist', 'The Nun', 'Annabelle', 'A Nightmare on Elm Street','The Return of Michael Myers']

    res.send(movie)
});



router.get('/movies/:indexnumber', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let movie = [ "Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log("the req object is: "  + JSON.stringify(req.params));
    let i= req.params.indexnumber;
    validMaxValue= movie.length;
    let movieCorrespondingToIndex = '';
    if(i<validMaxValue){
     res.send(movieCorrespondingToIndex = movie[i])
    }else {
      res.send(movieCorrespondingToIndex= "Please provide proper index for getting movies name")
    }

    //  res.send(movieCorrespondingToIndex)
})

router.get('/films', function (req, res) {
    let film = [ {
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]
    res.send(film);
})

router.get("/films/:filmId", function(req,res){
  
    let film = [ {
      id: 1,
      name: 'The Shining'
     }, {
      id: 2,
      name: 'Incendies'
     }, {
      id: 3,
      name: 'Rang de Basanti'
     }, {
      id: 4,
      name: 'Finding Nemo'
     }]
      console.log("The request objects is " + JSON.stringify(req.params));
      let result='';
      let fid= req.params.filmId
      let filmLength = film.length 
      if(fid>0 && fid<=filmLength){
        for(let i=0; i<film.length;i++){
          if(fid== film[i].id){
           result=  JSON.stringify(film[i])
           console.log(result);
          }
        }
      }
       else{
        result= "No movie exists with this id"
        console.log(result);
       }

     res.send(result);
  })



module.exports = router;