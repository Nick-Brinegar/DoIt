package com.main.taskmanager.controller;

import com.main.taskmanager.models.Task;
import com.main.taskmanager.repository.TaskRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private TaskRepository taskRepository;

    /* 
    TaskController(TaskRepository repo){
        this.taskRepository = repo;
    }
        */
    

    @GetMapping
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }
    
    @GetMapping("/test")
    public String testEndpoint() {
        return "Server is running yo";
    }
}
