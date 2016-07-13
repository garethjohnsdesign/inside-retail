---
title: Fine Tuning - Inspiration
permalink: "/fine-tuning/inspiration/"
categories:
- fine-tuning
tags:
- inspiration
layout: default
color: purple
image: "/uploads/fine-tuning.jpg"
shape: "/uploads/fine-tuning.svg"
header: Fusce Pellentesque Purus Inceptos Tellus
subheader: Etiam porta sem malesuada magna mollis euismod
lead-paragraph: Aenean lacinia bibendum nulla sed consectetur.
---

{% include sub-navigation-inspiration.html %}

<div class="category__content__wrap">
<div class="row category__content" id="category__content">


{% assign category_posts = site.categories.fine-tuning %}
{% for post in category_posts %}
{% if post.tags contains 'inspiration' %}
<div class="small-12 medium-6 large-4 columns">
{% include excerpt.html %}
</div>
{% endif %}
{% endfor %}
</div>
</div>