#pragma strict

import UnityEngine.UI;
import UnityEngine.SceneManagement;

public var Kevin : Text;
public var maxHP : int;
public var currentHP : int;
public var DeathSound : AudioClip;
public var DeathAudioSource : AudioSource;
public var DamageImage : Image;
public var FromIshil : BulletScript;
public var MessagesOfImprovement : MessagesOfImprovement;
public var textBox : Text;


private var time : float; 
public var DeathSoundPlayed : boolean = false;
private var RestartTimer : float;
private var HitImage : boolean=false; 
private var EmptyColor : Color;

function Start () {
	//Kevin = gameObject.GetComponent(Text) as Text; 

	currentHP = maxHP; 
	Kevin.text = currentHP.ToString();
	time= Time.time;
	EmptyColor=DamageImage.color;
	EmptyColor.a=0;
}

function Update () {
	
	HitTest();
	if(currentHP<=0)
	{
		RestartTimer+=Time.deltaTime;
	}
	if(currentHP<=0 && DeathSoundPlayed==false)
	{
		DeathSoundPlayed=true;
	}
	if(RestartTimer>=0.6)
	{
		SceneManager.LoadScene("Game Over");
	}
}

function HitTest() {
	if(FromIshil.punishPlayer)
	{
		HitImage=true;
	}

	if(HitImage)
	{
		currentHP--;
		Kevin.text = currentHP.ToString();
		Debug.Log(Time.timeSinceLevelLoad);
		MessagesOfImprovement.hitText(textBox);
		DamageImage.color.a = 255;
		HitImage=false;
		FromIshil.punishPlayer=false;

	}
	else
	{
		DamageImage.color = Color.Lerp (DamageImage.color, EmptyColor, 10.0 * Time.deltaTime);
	}
}