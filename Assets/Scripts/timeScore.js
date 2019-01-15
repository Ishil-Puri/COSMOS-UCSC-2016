#pragma strict

var player : HPController;
var timer : timer;
var score : float;

function Start () {
player = GameObject.FindGameObjectWithTag("Player").GetComponent.<HPController>();
timer = GameObject.Find("TimerText").GetComponent.<timer>();
DontDestroyOnLoad(transform.gameObject);
}

function Update () {
	if(player.currentHP <= 0) {
		score = timer.getFinal();
	}

}