package com.testpro.TaskManagerApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TaskManagerApp {

	public static void main(String[] args) {
		System.out.println("Starting TaskManagerApp...");
		SpringApplication.run(TaskManagerApp.class, args);
	}

}
