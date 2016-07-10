---
title: 'Quick tip: Assets in meta fields'
date: 2014-06-13 14:22:00 Z
categories:
- branching-out
tags:
- marketing
excerpt-image: "/uploads/inside-retail-test-content-29.jpg"
excerpt-text: Maecenas faucibus mollis interdum
hero-video: 
hero-image: "/uploads/inside-retail-test-content-29.jpg"
hero-text: Maecenas faucibus mollis interdum
hero-quote: Lorem Ipsum Quote
hero-cite: Jeremy Corbs
length: Long Read
---

![](/uploads/pdf.gif) 

Siteleaf makes it easy to assign assets in your metadata fields, just drag and drop (as shown above).

Now in your theme, you can easily link to your asset:

```liquid
{% raw %}<a href="{{ meta['project_link'] }}">
  {{ meta['project_link_title'] }}
</a>{% endraw %}
```

This is a great way to reference special assets like featured images or PDF downloads.

To learn more about metadata see our tutorial [Metadata in Siteleaf](/blog/metadata-in-siteleaf).
