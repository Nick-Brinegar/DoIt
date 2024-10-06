package com.main.taskmanager.repository;

import com.main.taskmanager.models.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<Task, String> {
}
