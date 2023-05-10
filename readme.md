# Eleventy Generate Posts

A simple command-line utility that creates a batch of new posts for an [Eleventy](https://www.11ty.dev/) site.

When you're testing out some aspect of an Eleventy site or doing a demo, you often need to populate the site with a set of posts to flesh out the site. Copying a single post or set of posts repeatedly into the site works, but an automated solution is better. This is that solution.

The utility generates batches of Eleventy site posts, populating the post title with a random quantity of random words and populating the post body with a random number of paragraphs of [Bacon Ipsum](https://baconipsum.com/) text.

## Installation

You don't have to install the package to use it; simply open a terminal window or command prompt to your Eleventy project folder and execute the command using `npx eleventy-generate-posts` and the command-line options described in the following section.

To install the command globally on the system, execute the following command:

```shell
npm install -g eleventy-generate-posts
```

This adds a `11ty-gp` command to the system.

## Usage




```shell
┌─────────────────────────┐
│                         │
│   11ty Generate Posts   │
│                         │
└─────────────────────────┘
by John M. Wargo (https://johnwargo.com)
Usage: eleventy-generate-posts [options] <numPosts> <targetFolder> <tag> [startYear]

Arguments:
  numPosts      Number of posts to generate
  targetFolder  Target folder for generated posts files
  tag           Tag to apply to all generated posts
  startYear     Start year for generated posts

Options:
  -d, --debug   Debug mode
  -h, --help    display help for command
```


### Getting Help Or Making Changes

Use [GitHub Issues](https://github.com/johnwargo/eleventy-generate-posts/issues) to get help with this module.

Pull Requests gladly accepted, but only with complete documentation of what the change is, why you made it, and why you think its important to have in the module.

***

If this code helps you, please consider buying me a coffee.

<a href="https://www.buymeacoffee.com/johnwargo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>