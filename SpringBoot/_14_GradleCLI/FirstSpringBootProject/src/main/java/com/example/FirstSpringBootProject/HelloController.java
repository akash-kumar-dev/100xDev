package com.example.FirstSpringBootProject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String getHello() {
        return "<b>Hello World...<b>";
    }

    @GetMapping("/")
    public String getHome() {
        return "Home page..";
    }
}
