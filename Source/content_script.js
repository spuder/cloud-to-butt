walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bCoronavirus\b/g, "Cooties");
	v = v.replace(/\bCoronaVirus\b/g, "Cooties");
	v = v.replace(/\bcoronavirus\b/g, "cooties");
	v = v.replace(/\bCovid-19\b/g, "SwineFlu-2.0");
	v = v.replace(/\bcovid-19\b/g, "swineflu-2.0");
	v = v.replace(/\bSocial Distancing\b/g, "Tag, Not-It");
	v = v.replace(/\bsocial distancing\b/g, "tag, not-it");
	v = v.replace(/\bToilet Paper\b/g, "White Gold");
	v = v.replace(/\btoilet paper\b/g, "white gold");
	v = v.replace(/\bThe CDC\b/g, "Your Mom");
	v = v.replace(/\bthe CDC\b/g, "your mom");
	v = v.replace(/\bQuarantine\b/g, "Hide and Seek");
	v = v.replace(/\bquarantine\b/g, "hide and seek");

	textNode.nodeValue = v;
}


