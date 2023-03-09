package com.a604.cake4u.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {
    
	@Bean
    public OpenAPI realCartApiInfo() {
        return new OpenAPI()
        		.info(new Info().title("RealCart API")
	            .description("Real Cart Play application")
	            .version("v0.0.1"));
    }
}
