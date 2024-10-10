#!/bin/bash

start_server() {
    echo "Starting server..."
    cd ./server
    mvn spring-boot:run &
    SPRING_PID=$!
    echo "Server started with PID: $SPRING_PID"
}
