---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: LARA Lab
subtitle: Language, Aid, and Representation AI Lab
---
# About
In this lab, we look at using and improving language tools to make better, human-centered artifical intelligence (AI). We are currently working on neurosymbolic methods for playing <i>Dungeons &amp; Dragons</i> and speech synthesis for accessibility.


#### Location
Information Technology and Engineering (ITE) 368



# Lab Members


{% for group in site.data.people %}
<h2> {{group.title}} </h2>
<div id="table-wrapper">
<div id="table-scroll">
<table id="data">

  <tbody>
  <tr>
  {% for person in group.people %}
  
	<td>
	<div class="image-cropper">
	 {% if person.img %}
		 {% if person.img contains "://" %}
			 <img src="{{person.img}}" alt="{{person.alt}}">
			 {%else%}
			 <img src="assets/img/people/{{person.img}}" alt="{{person.alt}}">
		 {%endif%}
	 {% else %}
	 <img src="assets/img/people/UMBC_Mascot.jpg" alt="Statue of True Grit, UMBC's mascot. True Grit is a Chesapeake Bay Retriever. Source: https://en.m.wikipedia.org/wiki/File:UMBC_Mascot.jpg">
	 {% endif %} 
	 </div>
	 <br>
	 <h4 style="display: inline;">{{person.name}}</h4>{% if person.subtitle %}, {{person.subtitle}}{% endif %}<br>
	 {{person.pronouns}}<br>
	 {% if person.website %}
	 [<a href="{{person.website}}" alt="{{person.name}}'s website">website</a>]
	 {% endif %}
	 {% if person.emaillist %}
	 [<div id="email{{person.first}}" style="display:inline;"> 
		<noscript><i>Please enable Javascript to view</i></noscript>
	</div>]
	 {% endif %}
	 {% if person.scholar %}
	 [<a href="{{person.scholar}}" alt="{{person.name}}'s Google Scholar">scholar</a>]
	 {% endif %}
	 {% if person.mastodon %}
	 [<a href="{{person.mastodon}}" alt="{{person.name}}'s mastodon account">social</a>]
	 {% endif %}
	 {% if person.blurb %}
	 <br><div class="bio">{{person.blurb}}</div>
	 {% endif %}
	</td>
	
  
  {% endfor %}
  </tr>
</tbody>
</table>
</div>
</div>
{% endfor %}
