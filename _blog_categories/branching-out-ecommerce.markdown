---
title: Branching Out - eCommerce
permalink: "/branching-out/ecommerce/"
categories:
- branching-out
tags:
- ecommerce
layout: default
color: magenta
image: "/uploads/branching-out.jpg"
shape: "/uploads/branching-out.svg"
header: Fusce Pellentesque Purus Inceptos Tellus
subheader: Etiam porta sem malesuada magna mollis euismod
lead-paragraph: Aenean lacinia bibendum nulla sed consectetur.
---

<!-- Sub Navigation -->
<div class="sub-navigation">
<div class="row">
<div class="small-12 columns">
<ul class="vertical medium-horizontal dropdown menu">
	
	<li>
	<a href="/{% for category in page.categories %}{{ category }}{% endfor %}/">All</a>
	</li>
	
	<li class="active">
	<a href="../ecommerce/">eCommerce</a>
	</li>
	
	<li>
	<a href="../marketing/">Marketing</a>
	</li>
	
	<li>
	<a href="../in-store/">In-Store</a>
	</li>
	
	<li>
	<a href="../inspiration/">Inspiration</a>
	</li>
	
</ul>
</div>
</div>
</div>
<!-- End Sub Navigation -->

<div class="category__content__wrap">
<div class="row category__content" id="category__content">


{% assign category_posts = site.categories.branching-out %}
{% for post in category_posts %}
{% if post.tags contains 'ecommerce' %}
<div class="small-12 medium-6 large-4 columns">
{% include excerpt.html %}
</div>
{% endif %}
{% endfor %}
</div>
</div>