function time(id)
{
	var d=new Date();
	var z1=z2=z3='';
	if (d.getHours()<10) 
	{
		z1='0';
	}
	if (d.getMinutes()<10) 
	{
		z2='0';
	}
	if (d.getSeconds()<10) 
	{
		z3='0';
	}
	document.getElementById(id).innerHTML = z1+d.getHours()+' : '+z2+d.getMinutes()+' : '+z3+d.getSeconds();
}
setInterval(function() {time('time1')}, 1000)

function dat(id)
{
	var d=new Date();
	document.getElementById(id).innerHTML = d.getFullYear()-1993;
}

