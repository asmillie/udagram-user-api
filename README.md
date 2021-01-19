# Udagram User Service

Microservice for handling users as part of the Udagram App. See next section for more information on Udagram.

## About Udagram

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

## Requirements

A Postgres DB (Local or on AWS RDS) and an AWS S3 Bucket is required along with an AWS IAM User that has access
to both.

### Run on Local Machine
* To download all the package dependencies, run the command from the root directory `udagram-user-api/`:
    ```bash
    npm install .
    ``
* Before running a development.env file will need to be created with the following values:
    ```development.env
    CORS_ALLOWED_URL_1=http://localhost:8080
    CORS_ALLOWED_URL_2=http://127.0.0.1:8080
    SERVER_PORT=8080
    POSTGRES_USERNAME=
    POSTGRES_PASSWORD=
    POSTGRES_HOST=
    POSTGRES_DB=
    AWS_S3_MEDIA_BUCKET=
    AWS_REGION=
    AWS_PROFILE=
    JWT_SECRET=
    ```

* To run the application locally, run:
    ```bash
    npm run dev
    ```
* You can visit `http://localhost:8080/api/v0/feed` in your web browser to verify that the application is running. You should see a JSON payload. Feel free to play around with Postman to test the API's.