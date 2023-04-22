const testQuery = async (_, {}, {models}) => {
    return await models.TEST.find();
}

export default testQuery
