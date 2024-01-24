const Movie = require ('../models/movie')
const Performer = require ('../models/performer')

// router.post('/', movieCtrl.create)
// router.get('/', movieCtrl.index)
// router.get('/:id', movieCtrl.show)
// router.get('/:movieId/performers/performerId', movieCtrl.addPerformer)

exports.create = async (req, res) => {
    try {
        const createdMovie = await Movie.create(req.body)
        res.status(200).json(createdMovie)
    }
    catch(error){
        res.status(400).json({msg: error.message})
    }
}

exports.index = async (req, res) => {
    try {
        const foundMovies = await Movie.find(req.body)
        res.status(200).json(foundMovies)
    }
    catch(error){
        res.status(400).json({msg: error.message})
    }
}

exports.show = async (req, res) => {
    try {
        const foundMovie = await Movie.findOne({_id: req.params.id})
        res.status(200).json(foundMovie)
    }
    catch(error){
        res.status(400).json({msg: error.message})
    }
}

exports.addPerformer = async (req, res) => {
    try {
        const foundPerformer = await Performer.findOne ({_id: req.params.performerId})
        if(!foundPerformer) throw new Error (`could no locate the performer with the id of ${req.params.performerId}`)
        const foundMovie = await Movie.findOne ({_id: req.params.movieId})
        if(!foundMovie) throw new Error (`could no locate the movie with the id of ${req.params.movieId}`)
        //many to many
        foundMovie.cast.push(foundPerformer._id)
        foundPerformer.credits.push(foundMovie._id)
        await foundMovie.save()
        await foundPerformer.save()
        res.status(200).json({
            msg: `successfully associated performer with id ${req.params.performerId} with movie ${req.params.movieId}`,
            movie: foundMovie,
            performer: foundPerformer
    
        })
    } catch(error){
        res.status(400).json({msg: error.message})
    }
}