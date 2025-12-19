---
layout: page
active_tab: publications
title: Publications
---
<div id="screen-reader-skip"></div>

# Publications

<!-- Pubs Start -->
<div class="container-fluid" id="publications">
	<div class="row align-items-center">
	
        <div class="category-sort-title">Sort by Topic</div>
        <div class="col-12 mb-2">
            <ul class="list-inline mb-4" id="portfolio-flters">
                <li class="btn btn-sm btn-outline-primary m-1 active"  data-filter="*">All</li><li class="btn btn-sm btn-outline-primary m-1" data-filter="aac">Augmentative and Alternative Communication (AAC)</li><li class="btn btn-sm btn-outline-primary m-1" data-filter="dnd">Dungeons & Dragons</li><li class="btn btn-sm btn-outline-primary m-1" data-filter="speech">Speech</li><li class="btn btn-sm btn-outline-primary m-1" data-filter="social">Social Media</li><li class="btn btn-sm btn-outline-primary m-1" data-filter="story">Story Generation</li><li class="btn btn-sm btn-outline-primary m-1" data-filter="understanding">Story Understanding</li>
            </ul>
        </div>
        
        <div class="category-sort-title">Sort by Venue Type</div>
        <div class="col-12 mb-2">
            <ul class="list-inline mb-4" id="portfolio-flters">
                <li class="btn btn-sm btn-outline-primary m-1 active"  data-filter="*">All</li><li class="btn btn-sm btn-outline-primary m-1" data-filter="Conference">Conference</li><li class="btn btn-sm btn-outline-primary m-1" data-filter="Workshop">Workshop</li><li class="btn btn-sm btn-outline-primary m-1" data-filter="Preprint">Preprint</li>
            </ul>
        </div>

        <div class="category-sort-title">Jump to Year</div>
        <div class="col-12 mb-2">
            <ul class="list-inline mb-4">
		{% assign now = 'now'  | date: "%Y" %}
		{% for year in (2014..now ) %}
			<li class="btn btn-sm btn-outline-primary m-1"><a aria-label="Scroll to {{ year }} publications" class="years" href='#{{ year }}'>{{ year }}</a></li>
		{% endfor %}
            </ul>
        </div>
    
            

	     
	     {% for year in (2014..now) reversed %}
       
        
        <div class="col-lg-6">
        <h3 class="mb-4" id="{{year}}">{{year}}</h3>
        <div class="border-left border-primary pt-2 pl-4 ml-2 portfolio-container">
        	{% assign papers = site.data.pubs  | where: "year", year %}
			{% if papers[0] %}
			{% for paper in papers %}
				{% capture list %}
					{% if paper.official_pdf %}
					<a aria-label="{{ paper.title }} official publication" href="{{ paper.official_pdf }}" class="paperlink">paper</a>
					{% endif %}
					{% if paper.pdf %}
					 <a aria-label="{{ paper.title }} pdf" href="pub/{{ paper.pdf }}" class="paperlink pdf">local pdf</a>{% endif %}
					 {% if paper.arxiv %}
					 <a aria-label="{{ paper.title }} arXiv" href="{{ paper.arxiv }}" class="paperlink arxiv">arXiv</a>
					 {% endif %}
					 {% if paper.slides %}
					 <a aria-label="{{ paper.title }} slides" href="{{ paper.slides }}" class="paperlink slides">slides</a>
					 {% endif %}
					 {% if paper.poster %} 
					 <a aria-label="{{ paper.title }} poster" href="{{ paper.poster }}" class="paperlink poster">poster</a>
					 {% endif %}
					 {% if paper.code %}
					  <a aria-label="{{ paper.title }} code" href="{{ paper.code }}" class="paperlink code">code</a>
					  {% endif %}
					 {% if paper.talk %}
					  <a aria-label="{{ paper.title }} talk" href="{{ paper.talk }}" class="paperlink talk">talk</a>
					  {% endif %}
					  {% if paper.data %} 
					  <a aria-label="{{ paper.title }} data" href="{{ paper.data }}" class="paperlink data">data</a>
					  {% endif %}
					  {% if paper.website %} 
					  <a aria-label="{{ paper.title }} website" href="{{ paper.website }}" class="paperlink website">website</a>
					  {% endif %}
					{% endcapture %}
					
					{% assign l = list | strip%}
					<!--{% assign aut = paper.authors | split: "," %}{% capture author_list %}{% for a in aut %}{% assign y = a |strip %}{% assign found = site.data.authors | find: "name", y %}{% if found %}, <a aria-label="{{found.name}}" href="{{found.link}}">{{found.name}}</a>{% else %}, {{y}}{% endif %}{% endfor %}{% endcapture %}-->
													
                <div class="position-relative mb-4 {{paper.tag}} {{paper.type}} portfolio-item ">                   
					{% if paper.img %}<div class="paperImage"><img src="assets/img/{{paper.img}}"></div>{% endif %}
					{% if paper.type %}<div class="{{paper.type}}"><mark>{{paper.type}}</mark></div>{% endif%}

                    <i class="far text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                    <h5 class="font-weight-bold mb-1">{{paper.title}}</h5>

      			{% assign aut = paper.authors %}{% for job in site.people %} {% for person in job.people %}{% assign aut2 = aut | replace: "{{person.name}}", "<u>{{person.name}}</u>" %}{% assign aut = aut2 %}{% endfor %}{% endfor %}
	 {{aut}}. <em>{{paper.venue}}</em>{%if paper.location%}, {{paper.location}}{%endif%}. {{ l }}
                    <a type="a" class="collapsible paperlink bib" aria-label="Copy BibTex for {{ paper.title }} to clipboard">bibTex</a><div class="copied tooltiptext">BibTex copied!</div><div class="highlight"><div class='measuringWrapper'>{{ paper.bib }}</div></div>
					
                </div>
                
                	{% endfor %}
			{% else %}
			<div style="padding-bottom:25px;">Stay tuned!</div>
			{% endif %}
        

            </div>
            
        </div>
        {% endfor %}


</div>
<!-- Pubs End -->
