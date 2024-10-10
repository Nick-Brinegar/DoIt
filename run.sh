#!/bin/bash

start_server() {
    echo "Starting server..."
    cd ./server
    mvn spring-boot:run &
    SPRING_PID=$!
    echo "Server started with PID: $SPRING_PID"
}

start_client() {
    echo "Starting client..."
    cd ./client
    npm start &
    CLIENT_PID=$!
    echo "Client started with PID: $CLIENT_PID"
}

cleanup() {
    echo "Stopping server..."
    kill $SPRING_PID
    echo "Server stopped."
    echo "Stopping client..."
    kill $CLIENT_PID
    echo "Client stopped."
    exit 0
}

