#pragma strict

private var finalTime : float;
public var scoreDisplay : UI.Text;

function Start () {
	finalTime = GameObject.Find("TimerText").GetComponent.<timer>().currentTime;
	scoreDisplay.text = " " + finalTime + " seconds";
	Debug.Log("Final time = " + finalTime + " seconds!");
}