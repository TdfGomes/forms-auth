#!/usr/bin/env bash

echo 'Creating mongo users .....'

mongo ${DB_NAME} \
        --host ${DB_HOST} \
        --port ${DB_PORT} \
        -u ${MONGO_ROOT_USER} \
        -p ${MONGO_ROOT_PASS} \
        --authenticationDatabase admin \
        --eval "db.createUser({user: '${DB_USER}', pwd: '${DB_PASS}', roles:[{role:'dbOwner', db: '${DB_NAME}'}]}); "

echo 'Mongo users created !'