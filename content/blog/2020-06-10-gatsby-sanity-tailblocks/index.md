---
title: Create a site with Gatsby + Sanity + Tailblocks
date: "2020-06-10T04:45:59.556Z"
description: ""
cover: "action-adventure-beach-clouds-414247.jpg"
---

In this post I share my learnings on how to create Sanity schemas, deploy them and use as data source for a Gatsby site. To save time on coding design, I'm going to use the ready-to-use Tailwind CSS blocks: Tailblocks.

## Sanity

For more details, follow the official docs' instructions on [Getting started with Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli). TL;DR here's the code:

### Bootstrap project

```bash
$ npm install -g @sanity/cli
$ sanity init
$ sanity start
```

### Schema defs

Schemas needs to be defined in the `schemas/schema.js`

It's practical to add each schema document or object in separated files and include them in the schema types list:

```jsx
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import feature from './feature'
import portfolioImage from './portfolio-image'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // here
    feature,
    portfolioImage,
  ]),
})
```

Read more: [Content modelling in Sanity Studio](https://www.sanity.io/docs/content-modelling)

#### Types

Sanity has the following types:

- string, number, boolean, datetime, url
- custom types via object types

Read more: [Understanding content types](https://www.sanity.io/docs/the-building-blocks)

#### Create document type

These will appear in the studio and we can create multiple docs using their structure.

Here as example (`schemas/feature.js`)

```jsx
export default {
  title: 'Feature',
  name: 'feature',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string'
    },
    {
      title: 'Cover',
      name: 'cover',
      type: 'image'
    },
  ]
}
```

#### Create object type

This defines a shape of a field, can be assigned to a document.

```jsx
export default {
  title: 'Portfolio image',
  name: 'portfolioImage',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string'
    },
    {
      title: 'Date of creation',
      name: 'dateOfCreation',
      type: 'datetime'
    }
  ]
}
```

Add this to the `schemas/schema.js` file's `schemaTypes.concat()`. Then we can add field to another schema.

```jsx
{
  title: 'Images',
  name: 'images',
  type: 'array',
  of: [{ type: 'portfolioImage' }],
},
```

### Deploy Sanity Studio

```bash
$ sanity deploy
```

Then our Studio will be available on the `<project>.sanity.studio` URL. If we change something in the studio locally, this is also how we would upload changes.

## Gatsby

### Create app, set up source

Create bare Gatsby app using the hello world starter. This one doesn't contain any boostrap code and dependencies, but it's ok, we can add them. First let's add Sanity source plugin.

```bash
$ gatsby new my-site https://github.com/gatsbyjs/gatsby-starter-hello-world
$ npm i gatsby-source-sanity --save
```

Configure Sanity plugin in `gatsby-config.js`

```jsx
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        // these values can be found in manage.sanity.io once the app is deployed
        projectId: 'project-id',
        dataset: 'production',
      },
    },
  ],
}
```

### Deploy GraphQL API for Sanity

```bash
$ sanity graphql deploy
```

### See data in Gatsby

Now the Sanity data should be visible in Gatsby's GraphiQL. Start the app by running

```bash
$ gatsby develop
```

Explore schema and query data on the [http://localhost:8000/__graphql](http://localhost:8000/__graphql) site

Find more info in the source plugin's site: [gatsby-source-sanity](https://www.gatsbyjs.org/packages/gatsby-source-sanity/)

## Tailblocks

### Setup Tailwind CSS

Install dependencies in the repo

```bash
$ npm install --save gatsby-plugin-postcss tailwindcss autoprefixer
```

Update Gatsby config (`gatsby-config.js`)

```jsx
module.exports = {
  plugins: [`gatsby-plugin-postcss`],
}
```

Add postcss config: create a `postcss.config.js` file in the project root with the following content:

```jsx
module.exports = () => ({
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
})
```

Create a css file (eg. `root.css`) with these imports

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

Import the recently created css to our app, somewhere on the top of the tree to make it available everywhere

```jsx
import React from 'react'
import '../components/root.css'

function App() {
  return (
    <div className="bg-gray-900">
      Tailwind classes should work now! 🎉
    </div>
  )
}
```

### Using Tailblocks

1. Visit [https://mertjf.github.io/tailblocks/](https://mertjf.github.io/tailblocks/) site and select an element
2. Click "View code" in the top bar and then copy the code
3. Paste it to your app
4. Rename all `class=""` attributes to `className=""` and transform "kebab-case" attributes names with "camelCase".

### Resources

[Installation - Tailwind CSS](https://tailwindcss.com/docs/installation/)

[Tailwind CSS](https://www.gatsbyjs.org/docs/tailwind-css/)

[gatsbyjs/gatsby](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-postcss)

[tailblocks - Ready-to-use Tailwind CSS blocks](https://mertjf.github.io/tailblocks/)

## Replace hardcoded data

Once we have built the site using Tailblocks, it's time to replace the hardcoded example text with data we get from Sanity.

Let's say we have a `Features` block. We can create a `Features` component in React, get and map data right in the component like this:

```jsx
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

function Features() {
  const { allSanityFeature } = useStaticQuery(graphql`
    {
      allSanityFeature {
        nodes {
          title
          description
          id
          cover {
            asset {
              fixed(width: 80) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="text-gray-500 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {allSanityFeature.nodes.map(feature => (
            <div
              className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center"
              key={feature.id}
            >
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-400 mb-5 flex-shrink-0">
                <Img fixed={feature.cover.asset.fixed} />
              </div>

              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  {feature.title}
                </h2>

                <p className="leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
```

Don't forget to install `gatsby-image` to make responsive, lazy-loaded image rendering work.

```bash
$ npm install gatsby-image --save
```

## Summary

Now we have a real Jamstack site with a headless CMS and a server side rendered responsive frontend! As a next step we can set up hosting and auto rebuild using webhooks.

### Other resources

* Cover image by [PixaBay](https://www.pexels.com/photo/action-adventure-beach-clouds-414247/)
