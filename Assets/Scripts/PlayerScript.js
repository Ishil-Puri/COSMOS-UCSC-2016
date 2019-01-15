#pragma strict
//@author Ishil and Ethan
//COSMOS 2016 08/03/16

//for each object you should have one audio source which takes in multiple CLIPS
//cd example...AudioSource is a player and ppl give their own clips on CDs for it to play 
public var pHitSound : AudioClip;
private var source : AudioSource;

function Start () {
	source = GetComponent.<AudioSource>();
}

function soundPlay(){
	Debug.Log("I played a sound!");	
	//we are setting the clip to a sound that we will drag into the CLIP variable in the UNITY Inspector
	source.clip = pHitSound;
	//plays the sound
	source.Play();
}