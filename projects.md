---
layout: page
---
# Projects

<!-- Pubs Start -->

{% for project in site.data.projects %}
## {{project.title}}
### {{project.start}} &mdash; {% if project.end %}{{project.end}}{% else %}Present{% endif%}
{{project.people}}
{{project.about}}
	
{% endfor %}
  
<!-- Pubs End -->
