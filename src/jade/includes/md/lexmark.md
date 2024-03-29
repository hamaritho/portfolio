##Lexmark International, Inc. &mdash; Jun 2013-Aug 2013

Lexmark is primarily a printer company. They design and manufacture printers and toner. As an intern, I worked with the Firmware Security team on some printer functionality that the team kept pushing back because of higher priority items.

My first project was to add a new function to the printer so that an administrator could filter printer logs by criteria, such as the name of a user, the date, the application accessing the printer, etc.

This project was meant to help me better understand the printer firmware system, and so was small in scale. However, in order to implement this functionality, I had to understand how different software pieces of the printer communicated via an object bus designed by Lexmark. I spent a good amount of time just looking at code and experimenting to see what would happen when I messed with things. It was a nice first look into Lexmark&rsquo;s system and allowed me to be better prepared for my second project.

My second project was to create a program that auto-configured a wireless printer to use the fastest server available for Kerberos authentication. It also created the Kerberos configuration file so that users would not have to.

Going into this internship, I had absolutely no idea how any authentication systems work. Prior to even starting the project, I had to read up on how Kerberos authentication worked in the first place. I had to learn what the essential pieces of a Kerberos configuration file were  so that I knew what lines to write. 

Not only that, but I was using the <a href="http://www.lehman.cuny.edu/cgi-bin/man-cgi?unistd.h+3" target="_blank">unistd</a> C library very heavily, and for the first time. Everything I did for this project, except for using C itself, was brand-new to me.

One of the tougher moments I had during this project involved pinging the available servers in order to choose the fastest one. Originally, I had not taken the time to read very far into the various ping configurations. Every once in a while, while testing my code, the program would run for large lengths of time, upwards of 10-20 minutes, and even then would not always terminate. It took me a great deal of time to figure out that the ping would sometimes hit a slow server that may or may not be down, and the ping would wait patiently for a return, even if no return would ever come. In order to fix this, I had to do more research into the workings of the ping command I was using, and figured out how to set a default timeout, such that the ping would give up after about 2 minutes. After that, my code ran smoothly.

After writing the program, I had to make a user interface accessible from the printer&rsquo;s preference page. The only things required to set up the configuration file were a username and password for authentication. I used some basic HTML5 form elements, which spoke to some back-end java code. Honestly, this part of the project was mostly automatically generated by some nifty Java/Eclipse functionality, but it did give me my first practical look at Java, and while many of the functions were generated, I had to modify them and make sure they led to my C program and behaved in the way I expected it to.

Overall, I found the work rather enjoyable. I got to learn a lot of valuable information in a real-world setting. However, staying mostly in the back-end was not my favorite. Firmware is important, and I appreciated the opportunity to work with it, but it wasn&rsquo;t for me.