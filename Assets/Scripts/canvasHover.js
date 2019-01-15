#pragma strict

import UnityEngine.UI;

var playText : Text;

function Start(){
	playText = GetComponentInChildren.<Text>();
}

function hoverOn(){
	playText.color = Color.red;
}

function hoverOff(){
	playText.color = Color.white;
}