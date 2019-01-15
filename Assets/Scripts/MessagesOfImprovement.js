#pragma strict

import UnityEngine.UI;

public var textBox : Text;
public var encouragementMessage: String[] = ["Good Job", "Don't Die", "Nice One"];
public var hitMessage: String = "You got hit";
var hit : boolean;

function Start() 
{
	textBox.text = "Good Luck";
	yield WaitForSeconds(2);
	textBox.text = " ";
	TimerStart();
}


function Update()
{
	
}

function TimerStart() : IEnumerator
{
	Debug.Log("encourgement timer started");
	yield WaitForSeconds(10);
	while(textBox.text != " "){
		yield WaitForSeconds(1);
	}
	printEncouragement();
	Debug.Log(Time.time);
	TimerStart();
/*
	while(true){
		if(hit){
			hit = false;
			yield WaitForSeconds(2);
			printEncouragement();
			yield WaitForSeconds(3);
			textBox.text = " ";
		}
		else{
			printEncouragement();
			yield WaitForSeconds(3);
			textBox.text = " ";
		}
		yield WaitForSeconds(7);
	}
*/}

function hitText(textBox: Text)
{
	textBox.text = hitMessage;
	yield WaitForSeconds(1);
	textBox.text = " ";
	hit = true;
}

function printEncouragement()
{
	var message = encouragementMessage[Random.Range(0, encouragementMessage.Length)];
	textBox.text = message;
	yield WaitForSeconds(2);
	textBox.text = " ";
}

