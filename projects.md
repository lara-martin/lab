---
layout: page
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
* **<a href="{%if pub.official_pdf%}{{pub.official_pdf}}{% else %}{{pub.arxiv}}">{{pub.title}}</a>** ({{pub.year}})
{% endfor %}
{% endfor %}
	
{% endfor %}
  
<!-- Pubs End -->
