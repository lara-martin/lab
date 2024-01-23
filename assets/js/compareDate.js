/* https://stackoverflow.com/questions/7087376/comparing-dates-in-liquid */
/* http://jekyllcodex.org/without-plugin/future-dates/ */


function getCompareDate() { 
  var d = new Date(), 
      month = '' + (d.getMonth() + 1), 
      day = '' + d.getDate(), 
      year = d.getFullYear(); 
  if (month.length < 2) month = '0' + month; 
  if (day.length < 2) day = '0' + day; 
  return [year, month, day].join(''); 
} 

$('[future-date]').each(function() { 
  if($(this).attr('future-date') > getCompareDate())
  {
  	/*$(this).hide();*/
  	$(this).css('background', '#C2F2B6');
  }
});
