codefreeze.fi
=============

Welcome to CodeFreeze - a different kind of conference.

## Updating the site

I highly encourage to test the site with Jekyll on your computer, if doing any (major) changes. GitHub has good instructions for [using Jekyll with GitHub Pages](https://help.github.com/en/articles/using-jekyll-as-a-static-site-generator-with-github-pages).

If you already have [Docker](https://www.docker.com/) on your computer, you may use this shell script for running Jekyll in Docker:

    ./serve.sh

Alternatively, you may install Jekyll directly on your computer:

Install Bundler:

    gem install bundler

Install the gems from the Gemfile:

    bundle install

Run the site locally using Jekyll:

    bundle exec jekyll serve

Occasionally it may be necessary to update the dependencies to match latest version of GitHub Pages. This command will update the `Gemfile.lock` file which should be committed to version control:

    bundle update

### Using the DevContainer

You can launch a DevContainer for example in VSCode. After launch, you can start the server using

    bundle exec jekyll serve

## Building the JavaScript for the gallery

```bash
npm ci
npx vite build
```