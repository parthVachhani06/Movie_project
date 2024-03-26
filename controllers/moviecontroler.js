const movieModel = require("../models/movie");
const fs = require("fs");


const homecontroler = (req, res) => {
    res.render("index");
}



const viewcontroler = async (req, res) => {
    const movies = await movieModel.find({});
    console.log(movies);
    res.render('views',{movies});
    console.log("complate viwes...");
}


const movieformcontroler = async (req, res) => {
    console.log(req.body);
    var {editId} = req.body ;
   

    if(!editId){
        const moviedata = new movieModel({
            movieName: req.body.movieName,
            description: req.body.description,
            rate: req.body.rate,
            type: req.body.type,
            language: req.body.language,
            movieposter:req.file.filename
        });
        await moviedata.save();
    }else{
        await movieModel.findByIdAndUpdate(editId,{
            movieName: req.body.movieName,
            description: req.body.description,
            rate: req.body.rate,
            type: req.body.type,
            language: req.body.language,
        })
        console.log("Edit Complate..");
    }
    await res.redirect("/views");
}



const editcontroler =async (req, res) => {
    const id = req.params.id;
    const singlemovie = await movieModel.findById(id);
    res.render("edit", { singlemovie });
}



const deletcontroler = async (req, res) => {
    const id = req.params.id;

    let movieSingal = await movieModel.findOne({ _id: id })
    fs.unlink(`./images/${movieSingal.movieposter}`, () => {
        console.log('delet succesfull...');
    })
    await movieModel.deleteOne({ _id: id });
    res.redirect("/views");
}



module.exports = {homecontroler,viewcontroler,movieformcontroler,editcontroler,deletcontroler}