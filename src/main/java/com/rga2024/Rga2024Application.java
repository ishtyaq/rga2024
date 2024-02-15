package com.rga2024;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.support.ResourceBundleMessageSource;


@SpringBootApplication
public class Rga2024Application {

    public static void main(String[] args) {
        SpringApplication.run(Rga2024Application.class, args);
    }

   

    @Bean
    public MessageSource messageSource() {
        ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
        messageSource.setBasename("messages"); // Base name for your message properties files
        messageSource.setDefaultEncoding("UTF-8");
        return messageSource;
    }
    


    /*
    @Bean
    public MultipartResolver multipartResolver() {
        CommonsMultipartResolver resolver
           = new CommonsMultipartResolver();
        resolver.setDefaultEncoding(StandardCharsets.UTF_8.displayName());
        resolver.setMaxUploadSize(300*1024 * 1024); //50MB
        resolver.setMaxUploadSizePerFile(300*1024 * 1024); //50MB

        return resolver;
    }

  */  

    
    
    
}
