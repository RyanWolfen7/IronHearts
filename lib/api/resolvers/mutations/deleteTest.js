const deleteTest = async (_, {id}, {models}) => {
    const deleteCoin = await models.TEST.deleteOne({_id: id});
    
    if(deleteCoin.deletedCount) return{id: id}
}

export default deleteTest
