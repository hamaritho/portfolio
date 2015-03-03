##Introduction to Robotics &mdash; Nov 2014-Dec 2014

<figure>
<img src="http://correll.cs.colorado.edu/wp-content/uploads/rethink-robotics-baxter-worker-robot.jpg">
<figcaption>Baxter the Robot. Image from <a href="http://correll.cs.colorado.edu/wp-content/uploads/rethink-robotics-baxter-worker-robot.jpg">here.</a>
</figure>
###About the Project

The Introduction to Robotics course covered the fundamentals of the meta-operating system ROS, as well as some basic algorithms for controlling behavior. Our final project was to write some sort of program for Baxter, the robot designed by Rethink Robotics. For our project, we used Image Servoing to identify a cup and then had Baxter's hand follow said cup.

The basic algorithm used to identify the cup was a Hough Transform algorithm. Basically, Baxter's hand looked for a circular object and followed it around.

###Lessons Learned

While not very complex in nature, our project still took us a great amount of time. Our largest problem was figuring out how to connect our algorithm to Baxter's movements. We decided to use ROS with C, because our hough transform code was in C. But most of the examples and tutorials were written in Python. We had a difficult time finding useful resources, and as such, what we thought would be quick took a decent amount of time.

However, because we had to figure out most of these resources from scratch, I came away with a much greater understanding of ROS than if I had had tutorials to follow.