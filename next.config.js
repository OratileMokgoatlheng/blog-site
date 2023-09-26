const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = phase =>  {

    if(phase === PHASE_DEVELOPMENT_SERVER){
        return {
            env: {
                mongodb_username: 'ratzi',
                mongodb_password: 'P9RKlRv39vJ0VciX',
                mongodb_clustername: 'cluster0',
                mongodb_databse: 'my-site'
            }
        }
    }

    return{

        env: {
            mongodb_username: 'ratzi',
            mongodb_password: 'P9RKlRv39vJ0VciX',
            mongodb_clustername: 'cluster0',
            mongodb_databse: 'my-site'
        }
    }
}