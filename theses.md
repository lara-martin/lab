---
layout: page
active_tab: theses
title: Theses
---
<div id="screen-reader-skip"></div>

# LARA Lab Theses

{% for type in site.data.theses %}

<h3>{{type.type}}</h3>

<div class="table-wrapper">
<div class="table-scroll">
<table class="people">
  <tbody>
  <tr>
  {% for person in type.people %}
	<td>
	 <h4 style="display: inline;">{{person.author}},</h4> <h5 style="display: inline;">{{type.type}} {{person.area}} at {{person.place}}</h5><br>
	 {% if person.official_pdf %}<h4 style="display: inline;"><a href="{{person.official_pdf}}" aria-label="{{person.author}}'s dissertation">{{person.title}}</a></h4>{%else%}<h4 style="display: inline;">{{person.title}}</h4>{%endif%}<br>
	 {%if person.date %}<h5> Defended: {{person.date | '%B %e, %Y' }}</h5>{% endif %}<br>
	 {%if person.abstract %} <b>Abstract:</b> {{person.abstract }}{% endif %}
	 
	 
	</td>
	
  {% endfor %}
  </tr>
  </tbody>
</table>
</div>
</div>





{% endfor %}
