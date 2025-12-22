package com.example.TodoApiSpring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/todos")
public class TodoController {

//    private FakeTodoService todoService;
//
//    @Autowired
//    @Qualifier("fakeTodoService")
    private TodoService todoService;

    private static List<Todo> todoList;

    public TodoController(@Qualifier("fakeTodoService") TodoService todoService) {
        this.todoService = todoService;
        todoList = new ArrayList<>();
        todoList.add(new Todo(1, true, "Todo 1", 1));
        todoList.add(new Todo(2, false, "todo 2", 2));
//        this.todoService = new TodoService();
    }

//    @GetMapping
//    public List<Todo> getTodos() {
//        return todoList;
//    }

    @GetMapping
    public List<Todo> getTodos(@RequestParam(required = false, defaultValue = "false") boolean isCompleted) {
        System.out.println("Query parameter isCompleted: " + isCompleted);
        System.out.println(todoService.doSomething());
        return todoList;
    }


//    @PostMapping("/todos")
//    @ResponseStatus(HttpStatus.CREATED)
//    public Todo createTodo(@RequestBody Todo newTodo) {
//        todoList.add(newTodo);
//        return newTodo;
//    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Todo> createTodo(@RequestBody Todo newTodo) {
        todoList.add(newTodo);
        return ResponseEntity.status(HttpStatus.CREATED).body(newTodo);
    }

    @GetMapping("/{todoId}")
    public ResponseEntity<?> getTodoById(@PathVariable int todoId) {
        for (Todo todo: todoList) {
            if (todo.getId() == todoId) {
                return ResponseEntity.ok(todo);
            }
        }

//        return ResponseEntity.notFound().build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Todo NOT Found");
    }
}
