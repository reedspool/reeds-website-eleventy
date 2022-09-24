---
title: My Fresh Website
discussionUrl: https://www.reddit.com/r/reedswebsite/comments/xmnrq4/my_fresh_website/
---

# My Fresh Website

I wanted a new website to publish my writing, so I made one.

As a web developer, I had the drive to add flair and faff. I could add all of the cool new technology I read about in the newsletters I follow. I checked myself. At the moment, my singular purpose was to share my writing.

I focused on the possible friction around writing and reading. This led to some basic use-cases to put my time and energy towards:

- Visitors read articles
- Visitors discover new articles
- I write and publish articles

The shiny, newfangled gadgets and gizmos could wait until I solved these core needs to a satisfactory level.

## Technology Choices

I wanted to write my articles in <a href="https://www.markdownguide.org/" target="_blank">Markdown</a> because it's a simple format with longevity and wide support.

I knew I wanted to use a static site generator to serve my simple articles. I chose <a href="https://github.com/11ty/eleventy" target="_blank">Eleventy</a> to generate my site because it promised simple setup and support for many templating languages. 

For the templating language, I chose <a href="https://ejs.co/" target="_blank">EJS</a>. EJS allows me to use JavaScript where other templating languages contain their own unique domain-specific language.

To style my site, I wanted simplicity. <a href="https://missing.style/" target="_blank">missing.css</a> recently released its `v1.0.0`, so I decided to try it out. The library promises decent default styling without littering my HTML with classes.

In past projects I used <a href="https://htmx.org" target="_blank">htmx</a> for web-based interactivity like form submission. In this project, I brought it in only to "boost" my links. This makes page transitions feel snappier because the entire page need not reload. Most of the pages on my site would have similar layout and resources so this made sense.

If I wanted to add page-local or more complicated interactivity in the future, I would choose <a href="https://hyperscript.org" target="_blank">hyperscript</a> to complete the full trinity of <a href="https://bigsky.software" target="_blank">Big Sky Software</a> tools.

