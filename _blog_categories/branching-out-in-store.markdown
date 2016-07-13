---
title: Branching Out - In-Store
permalink: "/branching-out/in-store/"
categories:
- branching-out
tags:
- in-store
layout: default
color: magenta
image: "/uploads/branching-out.jpg"
shape: "/uploads/branching-out.svg"
header: Fusce Pellentesque Purus Inceptos Tellus
subheader: Etiam porta sem malesuada magna mollis euismod
lead-paragraph: Aenean lacinia bibendum nulla sed consectetur.
---

{% include sub-navigation-in-store.html %}

<div class="category__content__wrap">
<div class="row category__content" id="category__content">


{% assign category_posts = site.categories.branching-out %}
{% for post in category_posts %}
{% if post.tags contains 'in-store' %}
<div class="small-12 medium-6 large-4 columns">
{% include excerpt.html %}
</div>
{% endif %}
{% endfor %}
</div>
</div>