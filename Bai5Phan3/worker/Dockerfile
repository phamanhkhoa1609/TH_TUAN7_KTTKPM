FROM openjdk:17
COPY Worker.java .
COPY jedis-4.4.3.jar .

RUN javac -cp jedis-4.4.3.jar Worker.java
CMD ["java", "-cp", ".:jedis-4.4.3.jar", "Worker"]

