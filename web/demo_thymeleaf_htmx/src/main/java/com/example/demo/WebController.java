package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WebController {

    private int counter = 0;

    @GetMapping("/hello")
    public String showHello(Model model) {
        model.addAttribute("message", "Hallo Welt");
        return "hello";
    }

    @GetMapping("/greeting/update")
    @ResponseBody
    public String updateGreeting() {
        counter++;
        return "Hallo Welt " + counter;
    }
}
