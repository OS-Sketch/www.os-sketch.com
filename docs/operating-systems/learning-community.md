---
hide:
  - navigation
tags:
  - Discussion
  - Logistics
  - Resources
---

# Learning Community

## Resource Links

The OS Sketch community offers several ways in which you can grow in your
knowledge of operating systems and your technical and engineering skills. Try
out the following resources and let us know what you think!

- [GitHub Issue
  Tracker](https://github.com/OS-Sketch/www.os-sketch.com/issues)
  allows you to, for instance, offer feedback on this site and report a defect
  in the source code examples that it features. To get started, log into your
  GitHub account and click the green button called "New Issue".

- [GitHub Discussions
  Forum](https://github.com/OS-Sketch/www.os-sketch.com/discussions) gives
  learners the opportunity to ask and answer questions about the projects on
  this site. Upon completion of a discussion you can mark the accepted answer
  and help out others who face the same challenge. To get started, log into your
  GitHub account and click the "New discussion" green button.

- [OS Sketch Discord Server](https://discord.gg/9VfCdqffu6) provides a way for
  members of the OS Sketch community to use text and video to chat with each
  other. To get started, click the link and accept the invitation to join the
  community. After you have setup your account and connected it to your email
  address, you can start to participate in the discussion.

## Community Advice

Sometimes you may not be sure which community forum you should use! Here is some
advice to consider when you face this dilemma. You should use the community
forum that best connects to your situation, as illustrated with these examples.

- If you have a **detailed technical question** or **need technical support**
  with content on the OS Sketch web site, then you should ask it on [GitHub
  Discussions
  Forum](https://github.com/OS-Sketch/www.os-sketch.com/discussions). Please
  note that the use of GitHub Discussions is ideal because it allows for the
  marking of an accepted answer to a technical question, which is not available
  through other community forums.

- If you have a **quick technical question** about the site's content, then you
  should ask it on the [OS Sketch Discord
  Server](https://discord.gg/9VfCdqffu6).

- If you want to **hang out**, **discuss the challenges** you face as you learn
  more about operating systems, or **share fun links** to new systems and
  tools, then you should go to the [OS Sketch Discord
  Server](https://discord.gg/9VfCdqffu6).

- If you want to **share or receive career advice** with other people who are
  either exploring and working in the field of operating systems, then you
  should go to the [OS Sketch Discord Server](https://discord.gg/9VfCdqffu6).

- If you want to **offer feedback** about OS Sketch content, then you should
  create an issue in the [GitHub Issue
  Tracker](https://github.com/OS-Sketch/www.os-sketch.com/issues).

- If you want to **report a bug** in either the **source code** or the
  **written content** on OS Sketch or **make a suggestions** for new content,
  then you should create an issue in the [GitHub Issue
  Tracker](https://github.com/OS-Sketch/www.os-sketch.com/issues).

## Integration Guidelines

### Commit Messages
- Commit messages should follow the rules described by the [Conventional
  Commits Standard](https://www.conventionalcommits.org/en/v1.0.0/#summary).
  Here is an example:

    ```
    fix: Add the correct percentages to grading table in syllabus
    ```

### Pull Requests (PR)
- To ensure the creation of uniform pull requests (PR), you should follow these syntactic rules:

    - The first letter of the pull request (PR) title should be capitalized,
      and the first word should be in the imperative case.
    - There should not be a period at the end of the PR's title.
    - The description should be meaningful and concise (less than 50
      characters).

- So as to avoid unnecessary builds on Netlify, excessive pushes to pull
  requests should be avoided if possible. In order to preview your changes to
  the web site, please adopt the following process that requires
  [Python](https://www.python.org/) and [Poetry](https://python-poetry.org/).

    - In the directory of the repository, run `poetry install`, then `poetry run
      mkdocs serve`.
    - To see the local build, copy the link and paste it into your browser.
    - In order to leave the local build, use `control + c` in the terminal.

- When you create your PR, please add every member of the Integration team as
  reviewers. With that said, please note that only two approving reviewers are
  **required** to merge your pull request.

- If your PR is a work in progress, mark it by putting 'WIP:' at the beginning of your PR name. Make sure you also make your PR a draft by clicking the draft button on the right side of the screen under the reviewers section. When you are ready to have your PR merged, remove the WIP in the PR name and mark it as Open by clicking the 'Ready for review' button in the merge box at the bottom of the PR.

- Two reviews should be selected for each PR. One reviewer should originate
  from the creator’s team and the other from the integration team. Both of
  these reviewers should carefully review both the new source code and
  technical writing and the preview of the web site created by Netlify.

- Once both reviewers have agreed that the PR does not have any mistakes, a
  member of the integration team or the course instructor will merge it and
  then Netlify's servers will build and deploy the site.
