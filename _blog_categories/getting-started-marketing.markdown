---
title: Getting Started - Marketing
permalink: "/getting-started/marketing/"
categories:
- getting-started
tags:
- marketing
layout: default
color: green
image: "/uploads/getting-started.jpg"
shape: "/uploads/getting-started.svg"
header: Fusce Pellentesque Purus Inceptos Tellus
subheader: Etiam porta sem malesuada magna mollis euismod
lead-paragraph: Aenean lacinia bibendum nulla sed consectetur.
---

{% include sub-navigation-marketing.html %}

<div class="category__content__wrap">
<div class="row category__content" id="category__content">


{% assign category_posts = site.categories.getting-started %}
{% for post in category_posts %}
{% if post.tags contains 'marketing' %}
<div class="small-12 medium-6 large-4 columns">
{% include excerpt.html %}
</div>
{% endif %}
{% endfor %}
</div>
</div>