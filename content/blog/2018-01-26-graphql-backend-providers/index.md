---
author: info_plhg3qe0
comments: true
date: 2018-01-26 05:48:07+00:00
layout: post
link: https://nandito.hu/2018/01/26/graphql-backend-providers/
slug: graphql-backend-providers
title: GraphQL backend providers
wordpress_id: 287
categories:
- Dev
- English
tags:
- baas
- graphcool
- graphql
- scaphold
---

There's a [list](http://graphql.org/code/#services) of GraphQL services on the [official website of GraphQL](http://graphql.org/). Most of these are backend as a service solutions. At first look, it might seem like a good idea to use them.

### BaaS concept

In short, the [backend as a service](https://en.wikipedia.org/wiki/Mobile_backend_as_a_service) (BaaS) grants a cloud based backend for our mobile or web app - or for only some parts of them. This can be for example user management, social media integration or any function we have defined. Some providers let us create full-featured [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) application backend using only their web graphical user interface.

We can use this backend through an API. If we have a CRUD app we can create, read, update and delete data via usual client-server communication.

The BaaS providers charge their customers for the service. This can be a monthly, annual or usage based fee.

Nowadays - as the market has expanded - basically everything is available through a BaaS. There are traditional [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) API and GraphQL API providers. This article is about the latter ones.

### Most of them has transformed or the development has stopped

This is the current list of BaaS services on the official GraphQL website:

* GraphCMS
* Graphcool
* Reindex
* Scaphold
* Tipe (this one is marked as software as a service)

Probably the best-known of the services above is [Graphcool](https://www.graph.cool/). Their extremely ambitious team is in Berlin and they have acquired well deserved reputation in no time. The GraphQL backend can be defined through their well-designed web console without deep coding knowledge.

In October, 2017 they announced that they would change the business model of Graphcool and in the future it would be transformed to an open source backend framework. Although they are also keeping their existing BaaS, the web console with 3rd party integrations has noticeably taken a back seat.

[Scaphold](https://scaphold.io/) is very similar to Graphcool. There are more 3rd party provider integration options in their web console and it is possible to define custom interfaces for the schema. Nevertheless it is not hard to find bugs on this web interface, saving changes fails several times due to server error.

The Scaphold's Slack is like a ghost town where a pinned message says:


>*IMPORTANT*: We’re currently going through some product changes. Until further notice, we are under maintenance mode. We really appreciate your patience and support!

The founders (and owners?) are members of this Slack group, however they don't respond to any questions and don't try to dispel rumours that have been spreading around on Scaphold's death. There are rumours about both acquisition and litigation. Anyhow, it seems risky to use Scaphold as BaaS for a new, greenfield project.

The url of the [Reindex BaaS](https://www.reindex.io/baas/) navigates to a 404 Not Found page. They announced in an [article](https://www.reindex.io/blog/discontinuing-backend-as-a-service/) on their blog that because of the strong competition they are discontinuing the hosted service and they make the source code available under open source license. Unfortunately I did not have the opportunity to try the Reindex BaaS.

I haven't tried [GraphCMS](https://graphcms.com/) either. Those who tried recommend it: they say it has great support, an active developer team and they would like to work as BaaS provider in the future. Maybe I'll write an article about my experience if I try it in the future. Until then good luck for them!

[Tipe](https://tipe.io/) is in _request access_ phase. Anyone can register and request an invitation to use their service. This email address collecting is a common practice, sometimes they do this when there is a business idea and they want to measure and predict how large the possible user base is. Then they can decide whether to start the business or not based on this result. I don't say that Tipe works like this but I haven't received the invitation I requested 2 months ago.

The question arises based on the above: why do these providers transform or discontinue their development?

### It's easy to reach their limits

The services I have tried mostly have the same functionality. Generally each software is similar in some aspects of development until a _certain point_. Data can be created, read, modified and deleted through an interface. Maybe some of these need user registration and different permissions.

After the _certain point _the business logic starts to get complicated, therefore the software needs more complicated and unique development solutions. Hence the need for custom backend functions. BaaS providers let their users define these functions in the web console.

However, if not just one developer but an entire team works on the project at the same time, they have to use the same console. This makes development more difficult as writing tests for the functions is not available (at least currently) and simultaneous editing can cause data (code) loss.

Likewise, version control is also missing, it's hard to track what is changed, when and why and by whom.

### For how long is it worth using them?

I think BaaS could save the time and cost of the backend development of a _greenfield_ or prototype application. Thus, using a BaaS for a not too complicated [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) (Minimum Viable Product) application can be considered a good option.

Later, when we find out during the test phase of our MVP application that it has potential, and there's a need to continue the development, it might be worth dedicating backend developers to the project. The GraphQL schema can be exported from both Graphcool and Scaphold, using them makes the backend development easier.

### Foresight: Amazon appears on the stage

At the end of November 2017, Amazon [announced](https://aws.amazon.com/about-aws/whats-new/2017/11/introducing-aws-appsync-a-managed-graphql-service-with-real-time-data-and-offline-programming/) that they would start their managed GraphQL service. AWS AppSync can be a huge competitor for most of the currently available BaaS providers. Mostly because Amazon has several experienced developers (the dev power) who can help the company to catch up with GraphQL. On the other hand, if the AppSync is integrated easily into the existing Amazon architecture, it can be a decision point for a developer team: using a well-known and already used provider instead of a smaller, startup-like BaaS.

Currently the AWS AppSync is in preview phase, to use it an invitation request needs to be submitted. So far I haven't done that, as the request form asks for credit card data.
