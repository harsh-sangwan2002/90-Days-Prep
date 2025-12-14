package com.scaler.productservice.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/random")
public class SampleController {

    // http://localhost:8080/random/hello
    @GetMapping("/hello/{noOfTimes}")
    public String sayHello(@PathVariable int noOfTimes){

        StringBuilder sb = new StringBuilder();

        for(int i = 0; i < noOfTimes; i++){
            sb.append("Hello World!");
        }

        return sb.toString();
    }

    @GetMapping("/bye")
    public String sayBye(){
        return "Bye Everyone!";
    }
}

/*
Endpoint - /orders, /search, /products
http -> 80
https -> 443

https://www.amazon.com/search?query="iPhone"
*/
