#pragma strict

public var turretList : GameObject[] = new GameObject[88];
public var projectile : GameObject;
private var fireRate : float;
private var timePassed : float;
private var nextFire : float;
private var index1 : int;
private var index2 : int; 
private var index3 : int;
private var index4 : int; 
private var rotation1 : Quaternion;
private var rotation2 : Quaternion; 
private var rotation3 : Quaternion; 
private var rotation4 : Quaternion;
public var bScript : BulletScript;


function Start(){

	fireRate = 10.0;
	timePassed = 10.0;
	nextFire = 3.0;

	for(var i=1; i<turretList.length; i++){
		turretList[i] = GameObject.Find("Turret (" + i + ")");
	}

	rotation1 = Quaternion.identity;
	rotation2 = Quaternion.identity;
	rotation3 = Quaternion.identity;
	rotation4 = Quaternion.identity;

	rotation1.eulerAngles = Vector3(0, 0, 0);
	rotation2.eulerAngles = Vector3(0, 180, 0);
	rotation3.eulerAngles = Vector3(0, 270, 0);
	rotation4.eulerAngles = Vector3(0, 90, 0);
}


function Update () {
	createBullet();
	decreaseFireRate();
}


function createBullet(){
	if(Time.timeSinceLevelLoad > nextFire){
		nextFire = Time.timeSinceLevelLoad + fireRate;

		//For randomizing the turrets where the bullets will spawn.
		index1 = Random.Range (0, turretList.length/4);
		index2 = Random.Range (turretList.length/4, turretList.length/2);
		index3 = Random.Range (turretList.length/2, 3 * turretList.length/4);
		index4 = Random.Range (3 * turretList.length/4, turretList.length);

		//Part below for creating bullets and their sounds
		var cBullet1 = Instantiate(projectile, turretList[index1].transform.GetChild(0).transform.position, rotation1); //Back wall
		var cBullet2 = Instantiate(projectile, turretList[index2].transform.GetChild(0).transform.position, rotation2); //Front wall
		var cBullet3 = Instantiate(projectile, turretList[index3].transform.GetChild(0).transform.position, rotation3); //Left wall
		var cBullet4 = Instantiate(projectile, turretList[index4].transform.GetChild(0).transform.position, rotation4); //Right wall		makeFireSound();

	}
}

function decreaseFireRate(){
	if (Time.timeSinceLevelLoad > timePassed && fireRate > 0){
		timePassed += 10;
		fireRate -= 1;
	}
}