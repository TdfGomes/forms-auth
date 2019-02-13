#!/usr/bin/env bash

echo 'Creating mongo user and init database'

mongo ${DB_NAME} \
        --host localhost \
        --port ${DB_PORT} \
        -u ${MONGO_ROOT_USER} \
        -p ${MONGO_ROOT_PASS} \
        --authenticationDatabase admin \
        --eval "db.createUser({user: '${DB_USER}', pwd: '${DB_PASS}', roles:[{role:'dbOwner', db: '${DB_NAME}'}]});"

echo 'User and database created !'