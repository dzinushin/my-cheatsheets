# Kafka



### 3-rd party CLI tools for Kafka

https://forum.confluent.io/t/3rd-party-command-line-tools-for-apache-kafka/919

#### kcat (ex kafkacat)

https://codingharbour.com/apache-kafka/learn-how-to-use-kafkacat-the-most-versatile-cli-client/

-P = Produce data
-C = Consume data
-L = List metadata
-Q = Query

```
kafkacat -C -b localhost:9092 -t topic1 -o beginning
```


Metadata
```
kafkacat -L -b localhost:9092 

kafkacat -L -b localhost:9092 
```