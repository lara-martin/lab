---
layout: page
active_tab: projects
---
# Ongoing Projects

<!-- Pubs Start -->

{% for project in site.data.projects %}
### {{project.title}}
#### **Current researchers:** {{project.people}}

_{{project.about}}_

#### Related Papers from the Lab
{% for pub in site.data.pubs %}
{% for curr_pub in project.pubs %}
{% if pub.title == curr_pub.title %}
* **<a href="{%if pub.official_pdf%}{{pub.official_pdf}}{% else %}{{pub.arxiv}}{% endif %}">{{pub.title}}</a>** ({{pub.year}})
{% endif %}
{% endfor %}
{% endfor %}
	
{% endfor %}
  
<!-- Pubs End -->
