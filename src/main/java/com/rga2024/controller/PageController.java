package com.rga2024.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class PageController {
	  @GetMapping("/page/{page}")
	    public String home(@PathVariable String page) {
	        return page; 
	    }
}
