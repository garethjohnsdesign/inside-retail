---
title: Branching Out - Inspiration
permalink: "/branching-out/inspiration/"
categories:
- branching-out
tags:
- inspiration
color: magenta
image: "/uploads/branching-out.jpg"
shape: "/uploads/branching-out.svg"
header: Want to expand your business?
subheader: How Tos, expert advice and top tips
lead-paragraph: Explore our articles and videos below
layout: default
---

{% include sub-navigation-inspiration.html %}

<div class="category__content__wrap">
<div class="row category__content" id="category__content">


{% assign category_posts = site.categories.branching-out %}
{% for post in category_posts %}
{% if post.tags contains 'inspiration' %}
<div class="small-12 medium-6 large-4 columns">
{% include excerpt.html %}
</div>
{% endif %}
{% endfor %}
</div>
</div>