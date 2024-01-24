const Performer = require ('../models/performer')

// router.post('/', performerCtrl.create)
// router.get('/', performerCtrl.index)

exports.index = async (req, res) => {
    try {
        const performers = await Performer.find({})
        res.status(200).json(performers)
    }catch(error) {
        res.status(400).json({msg: error.message})
    }
}

exports.create = async (req, res) => {
    try{

    }catch(error) {
        res.status(400).json({msg: error.message})
    }
}
