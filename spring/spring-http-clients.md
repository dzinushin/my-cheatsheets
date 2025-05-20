

RestTemplate
WebClient
RestClient


WebClient
```
@Bean
public WebClient webClient(Webclient.builder builder) {
  return builder
          .baseUrl("http://localhost:8080")
          .build();
}


public Mono<String> makeRequest() {
  return webClient
           .get("/some/path")
           .retrive()
           .bodyToMono(String.class);
}
```


RestClient
```
@Bean
public RestClient restClient() {
  return RestClient.builder()
           .baseUrl("http://localhost:8080")
           .build();
}


public String makeRequest() {
  return restClient
           .get()
           .uri("/some/path")
           .retrive()
           .body(String.class);
}
```
