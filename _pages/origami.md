---
layout: page
title: Origami
permalink: /origami/
description: A growing collection of my origami.
nav: true
nav_order: 5
display_categories: [original, remake]
horizontal: false
---

<!-- pages/origami.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">
    {% if category == "original" -%}
      Original Designs
    {%- else -%}
      Folding Other's Designs
    {%- endif -%}
  </h2>
  {%- assign categorized_origami = site.origami | where: "category", category -%}
  {%- assign sorted_origami = categorized_origami | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_origami -%}
      {% include projects_horizontal.html %}
    {%- else -%}
      <p>Coming soon!</p>
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_origami -%}
      {% include projects.html %}
    {%- else -%}
      <p>Coming soon!</p>
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display origami without categories -->
  {%- assign sorted_origami = site.origami | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_origami -%}
      {% include projects_horizontal.html %}
    {%- else -%}
      <p>Coming soon!</p>
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_origami -%}
      {% include projects.html %}
    {%- else -%}
      <p>Coming soon!</p>
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>

