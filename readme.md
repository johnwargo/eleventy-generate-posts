# Eleventy Generate Posts

A simple command-line utility that creates a batch of new posts for an [Eleventy](https://www.11ty.dev/) site.

When you're testing out some aspect of an Eleventy site or doing a demo, you often need to populate the site with a set of posts to flesh out the site. Copying a single post or set of posts repeatedly into the site works, but an automated solution is better. This is that solution.

The utility generates batches of Eleventy site posts, populating the post title with a random quantity of random words using the [Rando Free Random Word Generator API](https://random-word-api.vercel.app/) and populating the post body with a random number of paragraphs of [Bacon Ipsum](https://baconipsum.com/) text.

## Installation

To install the command globally on the system, open a terminal window or command prompt, then execute the following command:

```shell
npm install -g eleventy-generate-posts
```

This adds a `11ty-gp` command to the system.

You don't have to install the package to use it; simply open a terminal window or command prompt to your Eleventy project folder and execute the command using `npx eleventy-generate-posts` and the command-line options described in the following section.
## Usage

Execute the command using the following command-line parameters:

```shell
11ty-gp [options] <numPosts> <targetFolder> <tag> [startYear]
```

Supported command-line options are:

* `numPosts` (required) An integer value representing the number of posts generated.
* `targetFolder` (required) Relative path pointing to the Eleventy project's posts folder; use `.` for the current folder.
* `tag` (required) The post tag applied to the generated posts
* `startYear` (optional) The starting year used for post date in the generated posts. The command uses the current date or the current date with the specified year (when provided) to for the post date for the first generated post. For subsequent post dates, the command randomly decrements the day.

As an example, to generate 10 posts in the project's `posts` folder using a `tags` value of `post`, use:

```shell
11ty-gp 10 posts post
```

This command sets the post date for the current post to the current date, then works backwards (random days) for each subsequent generated post.

To generate 20 posts starting in 2021, use the following:

```shell
11ty-gp 20 posts post 2021
```

This command sets the post date for the current post to the current month/day plus the provided year, then works backwards (random days) for each subsequent generated post. So, if you execute the command on May 10, 2023, the command sets the post date for the first post to May 10, 2021 and works (randomly) backwards from there.

Supported command-line options (flags) are:

* `-d` or `--debug`: Enables debug mode which generates additional content to the terminal during execution
* `h` or `--help`: Displays usage information in the terminal

A sample generated post looks like the following:

```markdown
---
title: Boaster Halogen Jokingly Evident Decode Steadfast
date: 2023-03-19
tags: post
---

Bacon ipsum dolor amet brisket picanha swine beef ribs pork.  Pig short ribs andouille ham ribeye hamburger
tail rump turducken kevin alcatra bacon beef meatloaf.  Bresaola pancetta pig, cupim frankfurter brisket 
pork belly turkey.  Pork belly frankfurter cupim, salami picanha short ribs beef ribs chuck fatback pastrami 
doner chicken ham.  Tail fatback landjaeger chicken jowl, pancetta bresaola picanha.  Pork belly ball tip 
picanha bresaola capicola prosciutto drumstick swine flank cupim corned beef.

Sausage frankfurter ground round tail, tri-tip burgdoggen flank pork loin.  Bresaola landjaeger shoulder 
pastrami burgdoggen meatball.  Frankfurter kevin pig, hamburger andouille tail meatloaf cupim meatball beef 
ribs prosciutto.  Meatloaf chislic flank tri-tip swine filet mignon brisket sirloin turkey porchetta.
```

### Getting Help Or Making Changes

Use [GitHub Issues](https://github.com/johnwargo/eleventy-generate-posts/issues) to get help with this module.

Pull Requests gladly accepted, but only with complete documentation of what the change is, why you made it, and why you think its important to have in the module.

***

If this code helps you, please consider buying me a coffee.

<a href="https://www.buymeacoffee.com/johnwargo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>