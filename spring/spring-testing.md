
https://docs.spring.io/spring-boot/reference/testing/index.html
https://junit.org/junit5/docs/current/user-guide/


Филососфия spring boot test

Things I Wish I Knew When I Started Testing Spring Boot Applications by Philip Riecks @ Spring I/O
https://www.youtube.com/watch?v=5Td7vAS9qJI
https://www.youtube.com/watch?v=hR0bbk2tsF0

Beyond Built-in: Advanced Testing Techniques for Spring Boot Applications by Michael Vitz @ SpringIO
https://www.youtube.com/watch?v=vn9P38o03TQ
https://github.com/mvitz/beyond-spring-boot-testing/tree/main
https://2024.springio.net/slides/beyond-built-in-advanced-testing-techniques-for-spring-boot-applications-springio24.pdf


https://www.baeldung.com/spring-boot-testing


spring-boot-starter-test

batteries included:

- junit5 (junit-jupiter)
- assertj
- hamcrest
- mockito
- awaitility
- jsonpath
- jsonassert
- xmlunit

JUnit 5
=====================

@ExtendWith


Assertions libraries
=====================

JUnit 5 asserts
AssertJ
Hamcrest
JSONAssert
JsonPath



Mockito
=====================

@ExtendWith(MockitoExtension.class)
@Mock
@InjectMocks


Spring test support
======================

@SpringExtension, @SpringJUnitConfig


Sliced test context in Spring:
@WebMvcTest
@JdbcTest
@DataJpaTets
@JsonTest
...

@MockBean (for mocking beans with Mockito)
@SpyBean

@SpringBootTest(webEnvironment = MOCK (default!))

@LocalServerPort
TestRestTemplate


Awaitility
======================



Testcontainers
======================



MockWebServer (OkHttp)
======================


WireMock
======================




RestAssured
======================
