#pragma strict

public var damage : float;
public var timeBetweenAttacks : float = 5;

private var playerHealth : PlayerHealth;
private var canAttack : boolean = true;
private var timeAttack : float;

function Start() {
	playerHealth = GameObject.FindGameObjectWithTag("Player").GetComponent.<PlayerHealth>();
	timeAttack = timeBetweenAttacks;
}


function Update() {
	if(timeAttack >= 0) {
		timeAttack -= Time.deltaTime;
	} else {
		timeAttack = timeBetweenAttacks;
		canAttack = true;
	}
}


function OnTriggerEnter(other : Collider) {
	if(other.tag == "Player" && canAttack) {
		playerHealth.TakeDamage(damage);
		canAttack = false;
	}
}