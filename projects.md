---
layout: page
---
# Projects

<!-- Pubs Start -->
<div class="container-fluid">
	<div class="row align-items-center">

			{% for project in site.data.projects %}
				<i class="far text-primary position-absolute" style="top: 2px; left: -32px;"></i>
				<h5 class="font-weight-bold mb-1">{{project.title}}</h5>
				{{project.start}} -- {% if project.end %}{{project.end}}{% else %}Present{% endif%}
				<br>
				{{project.people}}<br><br>
                
           {% endfor %}

        
        
    </div>
</div>
<!-- Pubs End -->
