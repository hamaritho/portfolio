##Markit On Demand &mdash; Jun 2014-Aug 2014

<figure class="full">
<img src="resources/markit/images/Markit.png">
<figcaption>A screenshot of the Design Library, the project I worked on for Markit.</figcaption>
</figure>

Markit On Demand is a consulting company specializing in web development for financial institutions. As an intern I was assigned an in-house project: to make a website for the Design Team. The website functioned mostly as a well-designed wiki with a superior What-You-See-Is-What-You-Get(WYSIWYG) editor. I worked with a fellow intern, <a href="http://alexkessock.com" target="_blank">Alex Kessock</a>, on the project.

For this project, we were given free reign in terms of designing the stack and choosing the tools we used. We worked closely with the head of the Design Department to get the proper look, feel, and ease of use for the website. In the end, we decided to focus on creating an easy user experience, and to help us do that we decided to use Drupal to take care of the back-end.

Alex worked with the CSS and Javascript, while I worked almost exclusively with Drupal&rsquo;s multitude of modules. Among these modules were:

- <a href="https://www.drupal.org/project/views" target="_blank">Views</a>
- <a href="https://www.drupal.org/project/views_php" target="_blank">Views PHP</a>
- <a href="https://www.drupal.org/project/wysiwyg" target="_blank">Wysiwyg</a> (with <a href="http://ckeditor.com/">CKEditor</a>)
- <a href="https://www.drupal.org/project/rules" target="_blank"> Rules</a>
- <a href="https://www.drupal.org/project/entity" target="_blank">Entity API</a>
- <a href="https://www.drupal.org/project/media" target="_blank">Media</a>
- <a href="https://www.drupal.org/project/logintoboggan" target="_blank">LoginToboggan</a>
- <a href="https://www.drupal.org/project/ldap" target="_blank">Lightweight Directory Access Protocol (LDAP)</a>
- Various PHP Modules

This project was a fantastic opportunity for me to experiment with a Content Management System(CMS). I had never looked into CMS before, so I was very curious about it.

Originally, though, I wan&rsquo;t too thrilled to use any CMS. I had really wanted to work on a large-scale site completely from scratch, to get a better feel of what it was like to build a complex website. But, in the short two and a half months I would be with Markit, I came to appreciate Drupal. It gave me the opportunity to work on more important things than devising a backend system.

<figure class="right">
<img src="resources/markit/images/Markit-Home.png">
<figcaption>The home page for the Markit Design Library. The &ldquo;Latest Activity&rdquo; section was one of the hand-coded PHP pieces I worked on.</figcaption>
</figure>

While designing the website, however, we came to a point where the functionality asked for by the design team was not easily implemented in Drupal. Or, at least, there were some aspects of functionality that did not have modules available. So instead, I used custom PHP modules. For example, we were expected to display a relative &ldquo;Last Edited&rdquo; date for articles and comments on the site. I wrote custom php code within a module to translate the difference between the &ldquo;last edited&rdquo; timestamp and the current timestamp to relative time periods. The relative time periods included *today*, *yesterday*, *days ago*, *months ago*, and *years ago*.

Another aspect of the project was to connect Drupal accounts to Markit&rsquo;s LDAP servers for easy authentication. While there was a module for LDAP, it was still a challenge to set up the authentication in such a way that it would not break should an account disappear.

As part of this project, we also worked with the Quality Assurance (QA) interns to make sure the project was meeting guidelines and did not have any bugs. This was the first time I worked with a QA team. Getting almost immediate feedback on bugs was fantastic. It helped Alex and I fix bugs we had missed and get the site finished, 99% bug-free, before our internships ended.

This project also gave me the chance to really explore web development as a career opportunity. Overall I found the entire process rather enjoyable. I certainly enjoyed my work with Markit far more than just coding assignments for class.