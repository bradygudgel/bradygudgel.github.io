//UserAgent Switcher (Fancy words for changing between desktop and mobile sites)

function mobile () {
if (/iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent))
	{
	document.location.href = document.location.href.replace ('https://website.com', 'https://website.com/m');
	}
else
	{
        return false;
	}
}

//End UserAgent Switcher