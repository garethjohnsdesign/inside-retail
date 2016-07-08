---
title: Fine Tuning | eCommerce
permalink: "/fine-tuning/ecommerce/"
categories:
- fine-tuning
tags:
- ecommerce
layout: default
color: purple
image: "/uploads/fine-tuning.jpg"
shape: "/uploads/fine-tuning.svg"
header: Fusce Pellentesque Purus Inceptos Tellus
subheader: Etiam porta sem malesuada magna mollis euismod
lead-paragraph: Aenean lacinia bibendum nulla sed consectetur.
---

<!-- Sub Navigation -->
<div class="sub-navigation show-for-medium">
<div class="row">
<div class="small-12 columns">
<ul class="vertical medium-horizontal dropdown menu" data-dropdown-menu="qjv9ir-dropdown-menu" role="menubar">
	
	<li role="menuitem" class="current">
	<a href="" class="" tabindex="0">eCommerce</a>
	</li>
	
	<li role="menuitem">
	<a href="../marketing/" class="">Marketing</a>
	</li>
	
	<li role="menuitem">
	<a href="../in-store/" class="">In-Store</a>
	</li>
	
	<li role="menuitem">
	<a href="../inspiration/" class="">Inspiration</a>
	</li>
	
</ul>
</div>
</div>
</div>
<!-- End Sub Navigation -->

<div class="category__content__wrap">
<div class="row category__content" id="category__content">

{% assign category_posts = site.categories.fine-tuning %}
{% for post in category_posts %}
{% if post.tags contains 'ecommerce' %}
<div class="small-12 medium-6 large-4 columns">
{% include excerpt.html %}
</div>
{% endif %}
{% endfor %}
</div>
</div>