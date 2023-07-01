# Eleventy Generate Posts

A simple command-line utility that creates a batch of new posts for an [Eleventy](https://www.11ty.dev/) site.

When you're testing out some aspect of an Eleventy site or doing a demo, you often need to populate the site with a set of posts to flesh out the site. Copying a single post or set of posts repeatedly into the site works, but an automated solution is better. This is that solution.

The utility generates batches of Eleventy site posts, populating the post title with a random quantity of random words using the [Rando Free Random Word Generator API](https://random-word-api.vercel.app/) and populating the post body with a random number of paragraphs of [Bacon Ipsum](https://baconipsum.com/) text.

The original version of this utility used command-line arguments, but this version replaces them with prompts.

## Installation

To install the command globally on the system, open a terminal window or command prompt, then execute the following command:

```shell
npm install -g eleventy-generate-posts
```

This adds a `11ty-gp` command to the system.

You don't have to install the package to use it; simply open a terminal window or command prompt to your Eleventy project folder and execute the command using `npx eleventy-generate-posts` and the command-line options described in the following section.

## Usage

Execute the command using the following command:

```shell
11ty-gp
```

The module will prompt you for all the required options:

```text
┌─────────────────────────┐
│                         │
│   11ty Generate Posts   │
│                         │
└─────────────────────────┘
by John M. Wargo (https://johnwargo.com)
√ Target folder for generated posts? ... posts
√ Number of posts to generate? ... 10
√ Post tag? ... post
√ Start year for generated posts? ... 2023
√ Use year folder for posts? ... yes

Settings Summary:
----------------------------------------
Number of posts: 10
Target Folder: posts
Start Year: 2023
Tag: post
Year mode: enabled
Output folder: D:\dev\node\11ty-generate-posts\posts

Generating posts...
----------------------------------------
Writing: D:\dev\node\11ty-generate-posts\posts\2023\navigator-washbasin-dramatize-landside-sensation.md
Writing: D:\dev\node\11ty-generate-posts\posts\2023\amusing-peculiar-surgical-borough-impotency-surround-tubular.md
Writing: D:\dev\node\11ty-generate-posts\posts\2023\maturely-convene-squishier-verify.md
Writing: D:\dev\node\11ty-generate-posts\posts\2023\matchless-overlaid-expend-oxidation-tribesman.md
Writing: D:\dev\node\11ty-generate-posts\posts\2023\basis-brunt-swaddling-ladylike-support-epidemic-graded.md
Writing: D:\dev\node\11ty-generate-posts\posts\2023\certify-unsheathe-undress-obstacle-tweak-tray-ridden.md
Writing: D:\dev\node\11ty-generate-posts\posts\2023\matching-enjoying-contact-atlas.md
Writing: D:\dev\node\11ty-generate-posts\posts\2023\android-gecko-penalize-possum.md
Writing: D:\dev\node\11ty-generate-posts\posts\2023\contempt-acquire-filtrate-defense-ergonomic-acts.md
Writing: D:\dev\node\11ty-generate-posts\posts\2023\splinter-ecology-computer-nearby-shorts-feminize.md
```

Configuration options are:

* Posts Folder: Relative path pointing to the Eleventy project's posts folder; use `.` for the current folder.
* Number of Posts: An integer value between 1 and 100 representing the number of posts generated.
* Post Tag: The front matter `tag` property applied to the generated posts
* Start Year: The starting year used for post date in the generated posts. The command uses the current date or the current date with the specified year (when provided) to for the post date for the first generated post. For subsequent post dates, the command randomly decrements the day.
* Use Year Folder: specifies whether the module writes generated posts to the Posts folder (`N`) or into a separate folder for each year (`Y`).

Obviously if you generate enough posts to push into the previous year, the posts will save into a folder for the previous year. 

To enable debug mode, pass a `-d` flag on the command-line; in this mode, the module writes additional information to the console as it executes.

## Example Post

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

## Getting Help Or Making Changes

Use [GitHub Issues](https://github.com/johnwargo/eleventy-generate-posts/issues) to get help with this module.

Pull Requests gladly accepted, but only with complete documentation of what the change is, why you made it, and why you think its important to have in the module.

***

If this code helps you, please consider buying me a coffee.

<a href="https://www.buymeacoffee.com/johnwargo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>