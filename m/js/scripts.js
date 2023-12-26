if(("standalone" in window.navigator) && window.navigator.standalone){
 var noddy, remotes = false;

 document.addEventListener('click', function(event) {
  noddy = event.target;

  while(noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
   noddy = noddy.parentNode;
  }

  if('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes)){
   event.preventDefault();
   document.location.href = noddy.href;
  }
 },false);

}

//Google Analytics

//End Google Analytics

//Defaults
function generateLinkHTML(url, name) {
  var linkHTML = "<a href='" + url + "' class='item'>" + name + "</a>";
  return linkHTML;
}

function generateLastLinkHTML(url, name) {
  var linkHTML = "<a href='" + url + "' class='item' style='border-bottom:0px;-khtml-border-bottom-left-radius:10px;border-bottom-left-radius:10px;'>" + name + "</a>";
  return linkHTML;
}

function menu() {
  var linksHTML = "<div class='menu1'><p>";

  for (var i = 0; i < linkURLs.length; i++) {
    if (i === linkURLs.length - 1) {
      // Call generateLastLinkHTML for the last item
      linksHTML += generateLastLinkHTML(linkURLs[i], linkNames[i]);
    } else {
      // Call generateLinkHTML for other items
      linksHTML += generateLinkHTML(linkURLs[i], linkNames[i]);
    }
  }

  linksHTML += "</p></div>";
  return linksHTML;
}

function header()
{
return ("<div id='header'><a href='" + headerURL + "'><img src='" + headerIMG + "' height='100%' /></a></div>");
}

function shadow()
{
return ("<div id='shadow'><img src='img/shadow.png' width='100%' height='8px' /></div>");
}