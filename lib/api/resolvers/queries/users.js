const getUsersQuery = async (_, {}, { mongoPromise }) => {
    const { db, client } = mongoPromise
    try {
        const users =  await db.collection('users').find().toArray(function(err, docs) {
            if (err) throw err;
            client.close();
        });
        // console.log('\n\n====================================== TESTS USERS ===========================================\n\n', users, '\n\n============================================\n\n')
        return users
    } catch (err) {
        // console.log('\n\n====================================== TESTS Err ===========================================\n\n', err, '\n\n============================================\n\n')
        return err
    }
}

export default getUsersQuery
