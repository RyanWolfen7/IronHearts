const createUser = async (_, { input }, { mongoPromise }) => {
    const { db, client } = mongoPromise
    const { email, password, account, character } = input
    try {
        const exists = await db.collection('users').findOne({ email: email })
        // console.log('\n\n====================================== Create Err ===========================================\n\n', exists, '\n\n============================================\n\n')
        if(exists) {
            client.close();
            return {
                acknowledged: false,
                message: "already exists"
            }
        }
        const users =  await db.collection('users').insertOne({ ...input })
        client.close();
        return {...users, message: `Successfully created ${email}`}
    } catch (err) {
        // console.log('\n\n====================================== Create Err ===========================================\n\n', err, '\n\n============================================\n\n')
        return err
    }
}

export default createUser
