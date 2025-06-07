# Use the official OpenJDK image as a base
FROM openjdk:22-jdk-slim

# Create app directory
WORKDIR /app

# Copy the JAR file directly from local build
COPY target/server-0.0.1-SNAPSHOT.jar server-0.0.1-SNAPSHOT.jar

# Expose the port
EXPOSE 8080

# Run the app
ENTRYPOINT ["java", "-jar", "server-0.0.1-SNAPSHOT.jar"]
