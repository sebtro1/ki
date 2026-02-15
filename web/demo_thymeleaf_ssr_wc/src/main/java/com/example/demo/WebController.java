package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class WebController {

    
    @GetMapping("/users")
    public String showUsers(Model model) {
        // Simuierte DB-Daten
        List<User> userList = List.of(
                new User("101", "Anna Müller", "DevOps Engineer", true),
                new User("102", "Max Mustermann", "Product Owner", false));

        model.addAttribute("users", userList);
        return "user-list"; // rendert user-list.html

    
    }

}

// User Record
record User(String id, String name, String jobTitle, boolean isAdmin) {
}