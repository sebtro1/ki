package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/todos")
public class TodoController {

    private final List<Todo> todos = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong();

    public TodoController() {
        todos.add(new Todo(counter.incrementAndGet(), "Learn htmx", false));
        todos.add(new Todo(counter.incrementAndGet(), "Learn Thymeleaf", true));
    }

    @GetMapping
    public String index(Model model) {
        model.addAttribute("todos", todos);
        return "todos";
    }

    @PostMapping
    public String addTodo(@RequestParam String description, Model model) {
        if (!description.trim().isEmpty()) {
            todos.add(new Todo(counter.incrementAndGet(), description, false));
        }
        model.addAttribute("todos", todos);
        return "todos :: todoList";
    }

    @PutMapping("/{id}/toggle")
    public String toggleTodo(@PathVariable Long id, Model model) {
        for (Todo todo : todos) {
            if (todo.getId().equals(id)) {
                todo.setCompleted(!todo.isCompleted());
                break;
            }
        }
        model.addAttribute("todos", todos);
        return "todos :: todoList";
    }

    @DeleteMapping("/{id}")
    public String deleteTodo(@PathVariable Long id, Model model) {
        todos.removeIf(todo -> todo.getId().equals(id));
        model.addAttribute("todos", todos);
        return "todos :: todoList";
    }
}
