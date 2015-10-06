//utility.js :
// to give support in game, included logging

function Utility()
{
    this.log = function(str) 
	{
		if(DEV_MODE)
		{
			//get from http://stackoverflow.com/questions/20524700/custom-console-log-function-a-console-log-wrapper
			var line = trace();
			var lines = line.split("\n");
			console.log(x + " " + lines[2].substring(lines[2].indexOf("("), lines[2].lastIndexOf(")") + 1));
		}
    };
}
var Utility = new Utility();
