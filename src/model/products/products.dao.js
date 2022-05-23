import productsModel from './products.model.js'

class productsDao extends productsModel {
  constructor() {
    super('productsEcommerce',{
        _id:{type:Number, require:true},
        name:{type:String,require:true},
        price:{type:Number, require:true},
        description:{type:String, require:true},
        thumbnail:{type:String, require:true}
    })
  }
}

export default productsDao
