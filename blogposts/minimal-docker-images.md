# Minimal Docker Images with Alpine

Docker has simplified the process of containerizing applications and helped development and systems teams coordinate efforts for many organizations. As a developer, the ability to use platforms like Mesos and Marathon and test deployments on development clusters has helped me catch bugs and become more aligned with a company-wide process than if I just wrote code and threw it over the systems fence. One issue I ran into early with using Docker however was the giant image size I was regularly generating when executing `docker build`. 

To give some background info, my team at the time was deploying backend services written in Java and used to deploy by dropping WAR files into the proper directories of pet machines. To streamline our deployment workflow, I created a template base Docker image that contained all our essential dependencies, Java 8 JRE, Tomcat, etc. Then, whenever we wanted to deploy an application, we would add the app-specific code in a layer on top of the base image layer. The issue however was that these final images sometimes ballooned to as large as 1GB in size and quickly exhausted space in our private Docker repository as well as on our local machines. The large size even affected deployment time on our Mesos Cluster.

To alleviate the size issue, I replaced the CentOS base image OS we were using with Alpine Linux, a minimal Linux distro optimized for containerizing applications. The Dockerfile below is an example of containerizing Tomcat.

```
# Minimal base image build
FROM gliderlabs/alpine:3.3

# Install JRE
RUN apk add --no-cache tar openjdk8-jre

# Install Tomcat
RUN wget http://www-us.apache.org/dist/tomcat/tomcat-9/
         v9.0.0.M4/bin/apache-tomcat-9.0.0.M4.tar.gz
RUN tar -xvf apache-tomcat-9.0.0.M4.tar.gz
RUN mv apache-tomcat-9.0.0.M4 /root/tomcat
RUN rm *.gz

# Port Exposure
EXPOSE 8080

# Start Tomcat
CMD ["/root/tomcat/bin/catalina.sh", "run"]
```
The final size of this Docker image is 144MB with all that's missing is the compiled app code to be dropped in. Compare this to using the official bare CentOS 7 image that starts out at 200MB already!

I hope this helps you think about ways to minimize your Docker build!
