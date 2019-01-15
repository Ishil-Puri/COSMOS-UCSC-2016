#pragma strict

//This is the script for changing the cursor texture.

public var cursor : Texture2D;

function OnGUI () 
{
    var vectorx = Input.mousePosition.x;
    var vectory = Input.mousePosition.y;
    GUI.DrawTexture(Rect(vectorx-15,-vectory + Screen.height-15,30,30),cursor);
}

function Start()
{
	Cursor.lockState = CursorLockMode.None;
}

function Update () 
{
 	Cursor.visible = false;
}