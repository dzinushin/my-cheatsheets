

```

create table customer(
  id serial primary key,
  name varchar not null
)



@Bean
JdbcClient jdbcClient(DataSource dataSource) {
	return JdbcClient.create(dataSource) 
}
```

```
@Bean
ApplicationRunner appRunner(JdbcClient jdbcClient) {
	return args -> jdbcClient
	   .sql("select * from customer")
	   .query(Customer.class)
	   .stream
	   .forEach(System.out::println);
}

record Customer(Integer id, String name) {}
```