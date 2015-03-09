##interactiveFiction &mdash; Oct 2012-Dec 2012

<figure class="full">
<img src="resources/intfic/images/Home.png">
</figure>

###About the Project

In my sophomore year I had the pleasure to take Software Engineering Methods and Tools, the first real project-based class for Computer Science majors. The goal of the class was to make a web application of some sort in groups of three to four people. I had had the idea of making a choose-your-own-adventure game, and proposed this to my group-mates, who liked the idea.

Our first iteration began with a simple tool assessment. We knew that our web app would use HTML5, CSS, and some Javascript, but we also decided to research SQL databases and server-side languages and interfaces, such as PHP. During the beginning part of the class we had learned about Java Web Services and experimented with mySQL and PHP, but the experience made us wary of using either technology extensively. Instead, we opted to use only front-end technology: HTML5, CSS, and Javascript. We began implementing our first version of the user interface, which presented the user with a bunch of boxes: a story box, an information box, an action box, an inventory box, and a reaction box. For our first iteration we focused on making the story box and information box work correctly together. The information box was designed to display information about an item, location, or person when the corresponding word was clicked on in the story box. To make it more obvious what words were clickable, we made the words bold and added a hover effect as well. Originally we had hoped to have a simple song playing in the background, but the design of our app would not allow us to keep playing a song on loop. Because each individual part of the story was on its own html page, there was no way to continuously play the song. Instead, we chose to implement sound effects, where different actions would produce different sounds. At this stage we did not actually implement sound effects, however. We focused more on effect creation.

<figure class="left small">
<img src="resources/intfic/images/screen.png">
<figcaption>A screenshot of a page from our game.</figcaption>
</figure>

Our second iteration focused on creating content for our web application. It became obvious very quickly that in order to showcase our work we would need a lot of story written and implemented. It also became obvious that we would not be able to completely finish the stories we had started. However, we soon had enough to at least implement features we had originally proposed. For this iteration, that meant making action buttons work so that users could actually advance through the story. That was not very difficult to implement, and soon we had the first few story pages up and running. During this process we decided to declutter our interface and combined the reaction and story box into one. We also implemented the sound effects. Finally, we began to refine the design of the webpage and also looked for a free web host for our site.

<figure class="right">
<img src="resources/intfic/images/inventory.png">
<figcaption>Implementing the inventory was probably the hardest part of the app.</figcaption>
</figure>

The final iteration consisted of some tweaking and implementing a few last-minute features. One item that we never fully implemented was the idea of having some logic-based mini games to diversify the gameplay. We did introduce a riddle into our story tree, but actual mini games were never introduced. We also had wanted a way for players to resume the game from where they had left off and wanted to make it to where people couldn&rsquo;t cheat by hitting the back button on their browser. We looked into session storage and local storage for storing pertinent information. We decided to use local storage to store the path to the page the user is on. It worked very well. Instead of using the anchor tag to go to the next page, we used javascript to replace the current window location, which did not create a new entry in history. This made it so that if a user pressed the back button on their browser they would return to the home page instead of the previous page in the story. The last large piece of interactivity we wished to add was the use of inventory. The user could pick up items and then use them to interact with other objects in the story. This too was implemented with Javascript.

In the end, we had really only created the beginnings of a web app that was designed very poorly for maintainability. But I was able to create something I was interested in and really explore technologies I had wanted to learn.

###Lessons Learned

In the end we had over 65 individual HTML pages organized in a hierarchical structure. Every inventory item, action, and interact-able word was hard coded. The project was not maintainable or scalable. Had we chosen to use a database instead, we could have designed it to use a single page and simply change the text on the page instead. We would have been able to save user sessions in the database as well. 

Another technology we could have benefited from was git. We had originally tried to use git, but became so confused that we decided to keep the entire project in Dropbox instead. Dropbox was not a terrible solution &mdash; after all, it has version control and is automatically backed up to the cloud. But Dropbox does not allow for multiple users to edit the same document at the same time. Asynchronous editing would have saved many headaches and would have been possible using git. After this course I learned more about git and used it at an internship and I can now appreciate version control a lot more.

Since I had pitched this project, in some ways I was the &ldquo;leader&rdquo; of our group. I provided a lot of the direction for the app even though I was not responsible for most of the story. I learned a lot about staying organized and fulfilling a leadership role. I realized very quickly that leadership is about providing direction to those involved, and encouraging them to achieve their own goals while contributing to the larger whole. I think our group was able to do that well.

This was another opportunity to learn about time management. Since we had iterations to stick to it was a lot easier than other, more nebulous projects. But it still required planning and estimating how much we could actually achieve in a given iteration. Overall, we were quite successful, except for actually finishing the story arcs. We would have needed more than a few months to complete the story options since they branched so quickly.