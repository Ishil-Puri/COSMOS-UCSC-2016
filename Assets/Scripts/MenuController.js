#pragma strict
import UnityEngine.SceneManagement;

public var Hovered : HoverOver;


/**
    Mouse Down Event Handler
*/

public var textForPlay : TextMesh;
public var textForInstructions : TextMesh;

function Update()
{
	ChangeColor();
}


function OnMouseDown()
{
    // if we clicked the play button
    if(this.name == "PlayBT"){
        // load the game
       	loadLevel("Main");
    }
    if(this.name == "HelpBT"){
    	loadLevel("Instructions");
    }
    if(this.name == "Instructions"){
    	loadLevel("Main");
    }
}

function ChangeColor()
{
	if(Hovered.OnPlay == true)
	{
		Debug.Log("PlayBT color change");
		textForPlay.color=Color.red;
	}
	else
	{
		Debug.Log("PlayBT is white");
		textForPlay.color=Color.white;
	}
	//ensure button exists before accessing it
	if(textForInstructions != null){
		if(Hovered.OnHowToPlay)
		{
			Debug.Log("HowToPlay Color Change");
			textForInstructions.color=Color.red;
		}
		else
		{
			Debug.Log("HowToPlay is white");
			textForInstructions.color=Color.white;
	}
	}
}

function loadLevel(name : String) {
	SceneManager.LoadScene(name);
}
