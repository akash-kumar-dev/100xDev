package com.example.TodoApiSpring;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

//@Component
//@Service
@Service("fakeTodoService")
public class FakeTodoService implements TodoService {

    public String doSomething() {
        return "Something";
    }
}
