---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Language, Aid, and Representation AI (LARA) Lab
---

<div id="screen-reader-skip"></div>

# About the LARA Lab
In this lab, we look at using and improving language tools to make better, human-centered artificial intelligence (AI) by looking at how people communicate and creating computer-supported human communication tools. To find out more about what we're currently working on, check out the <a href="projects.html" aria-label="projects page">Projects</a> page.

#### Location
Information Technology and Engineering (ITE) 368



# Lab Members

{% for group in site.data.people %}

{% if group.title == "Lab Alumni" %}<hr><div class="expand-link"><h2>Lab Alumni</h2></div> <div class="expand-content">
{% for type in group.types %}
<h3>{{type.type}}</h3>

<div class="table-wrapper">
<div class="table-scroll">
<table class="people">
  <tbody>
  <ul>
  {% for person in type.people %}
	<li>
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
	 <div aria-label="pronouns">{{person.pronouns}}</div>{% if person.start %}<div aria-label="start year">{{person.start}}</div>{% endif %}
	 {% if person.area %}
	 <div class="bio" aria-label="{{person.name}}'s research area">{{person.area}}</div>
	 {% endif %}
	 {% if person.website %}
	 [<a href="{{person.website}}" aria-label="{{person.name}}'s website">website</a>]
	 {% endif %}
	 {% if person.scholar %}
	 [<a href="{{person.scholar}}" aria-label="{{person.name}}'s Google Scholar">scholar</a>]
	 {% endif %}
	 {% if person.bluesky %}
	 [<a href="{{person.bluesky}}" aria-label="{{person.name}}'s bluesky account">social</a>]
	 {% endif %}
	 {% if person.advisor %}<br>Advisor: <a href="{{person.advisor_link}}" aria-label="{{person.advisor}}'s website">{{person.advisor}}</a>{%endif%}
	 {% if person.coadvisor %}<br>Co-Advised by: <a href="{{person.coadvisor_link}}" aria-label="{{person.coadvisor}}'s website">{{person.coadvisor}}</a>{%endif%}
	 <!--{% if person.blurb %}
	 <br><div class="bio" aria-label="about {{person.name}}">{{person.blurb}}</div>
	 {% endif %}-->
	</li>
	
  {% endfor %}
  </ul>
</tbody>
</table>
</div>
</div>
{% endfor %}

</div>


{% else %} <h2> {{group.title}} </h2>
<div class="table-wrapper">
<div class="table-scroll">
<table class="people">
  <tbody>
  <ul>
  {% for person in group.people %}
	<li>
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
	 <div aria-label="pronouns">{{person.pronouns}}</div>{% if person.start %}<div aria-label="start year">{{person.start}}</div>{% endif %}
	 {% if person.area %}
	 <div class="bio" aria-label="{{person.name}}'s research area">{{person.area}}</div>
	 {% endif %}
	 {% if person.website %}
	 [<a href="{{person.website}}" aria-label="{{person.name}}'s website">website</a>]
	 {% endif %}
	 {% if person.emaillist %}
	 [<div id="email{{person.first}}" style="display:inline;"> 
		<noscript><i>Please enable Javascript to view</i></noscript>
	</div>]
	 {% endif %}
	 {% if person.scholar %}
	 [<a href="{{person.scholar}}" aria-label="{{person.name}}'s Google Scholar">scholar</a>]
	 {% endif %}
	 {% if person.bluesky %}
	 [<a href="{{person.bluesky}}" aria-label="{{person.name}}'s bluesky account">social</a>]
	 {% endif %}
	 {% if person.advisor %}<br>Advisor: <a href="{{person.advisor_link}}" aria-label="{{person.advisor}}'s website">{{person.advisor}}</a>{%endif%}
	 {% if person.coadvisor %}<br>Co-Advised by: <a href="{{person.coadvisor_link}}" aria-label="{{person.coadvisor}}'s website">{{person.coadvisor}}</a>{%endif%}
	 <!--{% if person.blurb %}
	 <br><div class="bio" aria-label="about {{person.name}}">{{person.blurb}}</div>
	 {% endif %}-->

	</li>
	
  {% endfor %}
  </ul>
</tbody>
</table>
</div>
</div>

{% endif %}

{% endfor %}
