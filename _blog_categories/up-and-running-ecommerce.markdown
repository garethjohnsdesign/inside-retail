---
title: Up and Running - eCommerce
permalink: "/up-and-running/ecommerce/"
categories:
- up-and-running
tags:
- ecommerce
layout: default
color: orange
image: "/uploads/up-and-running.jpg"
shape: "/uploads/up-and-running.svg"
header: Fusce Pellentesque Purus Inceptos Tellus
subheader: Etiam porta sem malesuada magna mollis euismod
lead-paragraph: Aenean lacinia bibendum nulla sed consectetur.
---

{% include sub-navigation-ecommerce.html %}

<div class="category__content__wrap">
<div class="row category__content" id="category__content">


{% assign category_posts = site.categories.up-and-running %}
{% for post in category_posts %}
{% if post.tags contains 'ecommerce' %}
<div class="small-12 medium-6 large-4 columns">
{% include excerpt.html %}
</div>
{% endif %}
{% endfor %}
</div>
</div>