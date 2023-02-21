FROM  postgres:10.3


# Addes the directory/files to the container
ADD /tables /docker-entrypoint-initdb.d/tables
# https://hub.docker.com/_/postgres/
ADD deploy_schemas.sql /docker-entrypoint-initdb.d/tables

