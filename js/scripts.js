// Body Functions

function head() {
  return ("<center><a href=''><img src='img/logo.png' class='logo'></a></center>");
}

function generateLinkHTML(url, name, hasDropdown, options) {
  var linkHTML = "<div class='menu'><a href='" + url + "' class='menu'>" + name + "</a>";

  if (hasDropdown) {
    linkHTML += generateDropdownHTML(options);
  }

  linkHTML += "</div>";
  return linkHTML;
}

function generateMobileLinkHTML(url, name) {
  var linkHTML = "<a href='" + url + "' class='mobileitem'>" + name + "</a>";
  return linkHTML;
}

function generateMobileLastLinkHTML(url, name) {
  var linkHTML = "<a href='" + url + "' class='mobileitem' style='border-bottom:0px;-khtml-border-bottom-left-radius:10px;border-bottom-left-radius:10px;'>" + name + "</a>";
  return linkHTML;
}

function indexmenu() {
  var linksHTML = "<b><div id='desktop-only' style='white-space:nowrap;text-align:right;'>";

  for (var i = 0; i < linkURLs.length; i++) {
    linksHTML += generateLinkHTML(linkURLs[i], linkNames[i], dropdownMenus[i].hasDropdown, dropdownMenus[i].options);
  }

  linksHTML += "</div></b>";
  return linksHTML;
}

function menu() {
  var linksHTML = "<b><div id='desktop-only' style='white-space:nowrap;text-align:right;'>";

  for (var i = 1; i < linkURLs.length; i++) {
    linksHTML += generateLinkHTML(linkURLs[i], linkNames[i], dropdownMenus[i].hasDropdown, dropdownMenus[i].options);
  }

  linksHTML += "</div></b>";
  return linksHTML;
}

function mobilemenu() {
  var linksHTML = "<b><div class='mobilemenu1'><p>";

  for (var i = 0; i < linkURLs.length; i++) {
    if (i === linkURLs.length - 1) {
      // Call generateMobileLastLinkHTML for the last item
      linksHTML += generateMobileLastLinkHTML(linkURLs[i], linkNames[i]);
    } else {
      // Call generateMobileLinkHTML for other items
      linksHTML += generateMobileLinkHTML(linkURLs[i], linkNames[i]);
    }
  }

  linksHTML += "</p></div></b>";
  return linksHTML;
}

function generateDropdownHTML(options) {
  var dropdownHTML = "<span class='dropdown'><ul>";

  for (var i = 0; i < options.length; i++) {
    dropdownHTML += "<li><a href='" + options[i].url + "'>" + options[i].text + "</a></li>";
  }

  dropdownHTML += "</ul></span>";
  return dropdownHTML;
}

function footer() {
  return ("<div title='Website Designed by Brady Gudgel'><a href='https://bradygudgel.github.io' class='link' target='_new'>" + siteFooter + "</a></div>");
}

// End Body Functions