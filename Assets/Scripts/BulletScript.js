#pragma strict
//@author Ishil and Ethan
//COSMOS 2016 08/03/16

public var bSpeed = 10;
public static var punishPlayer : boolean = false;
public var pS : PlayerScript;

function Start() {
	//sets variable to the game object with the tag Player's script called PlayerScript
	pS = GameObject.FindWithTag("Player").GetComponent.<PlayerScript>();
}

function Update() {
	transform.Translate(Vector3.forward * Time.deltaTime *bSpeed);
}

function OnTriggerEnter(collider : Collider){
	if(collider.gameObject.tag=="Wall" || collider.gameObject.tag=="Bullet"){
		Destroy(gameObject);
	}
	if(collider.gameObject.tag=="Player"){
		Debug.Log("Player has been hit");
		//Accesses a function in PlayerScript that will play a sound
		//the sound is not played in bullet script as the bullet object gets destroyed immediately
		pS.soundPlay();
		Debug.Log("Sound Played");
		punishPlayer = true;
		Destroy(gameObject);
	}
}