# Spring Security

https://docs.spring.io/spring-security/reference/index.html

## Peoples

### Daniel Garnier-Moiroux

https://garnier.wf/

https://github.com/Kehrlann


Spring Security Architecture Principles by Daniel Garnier-Moiroux @ Spring I/O 2024
https://www.youtube.com/watch?v=HyoLl3VcRFY
https://github.com/Kehrlann/spring-security-the-good-parts


Spring Security, demistifed
https://youtu.be/iJ2muJniikY?si=4uAWpUkU2ADmK5aA

### Laur Spilca

https://youtube.com/playlist?list=PLEocw3gLFc8X_a8hGWGaBnSkPFJmbb8QP&si=w7HxgX8lbp9i5TSf


https://youtu.be/1Mel8wn1HZs?si=INZ0m6P7w-IsGCwk

## Talks

Павел Кислов: Spring Security OAuth2 & Co Explained
https://www.youtube.com/watch?v=_o1jIjov19Y



RestClient 

Spring Security 6.4: RestClient Support for OAuth2
https://youtu.be/nFKcJDpUuZ8


### Spring Security configuration

### Configuration Servlet

```

@Configuration
clasns SecurityConfiguration {
  
  @Bean
  fun securityFilterChain(http: HttpSecurity): SecurityFilterChain =
    http.httpBasic { }
        .formLogin { }
        .authorizeHttpRequests { requests ->
            requests.anyRequest().authenticated()
        }.build()

  @Bean
  fun webSecurityCustomizer() : WebSecurityCustomizer = 
    WebSecurityCustomizer { web -> 
      web.ignoring.requestMatchers("/ignore1", "/ignore2")
    }
}
```



## Matchers

AntMatchers 
  https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/util/AntPathMatcher.html

MvcMatchers

RegexMatchers

