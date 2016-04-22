#pragma strict

	var player : GameObject;

function Awake () {

	player = GameObject.FindGameObjectWithTag("Player");

}

function FixedUpdate () {

	Movement();

}

function Movement () {

	transform.Rotate(0f, 1f, 0f);

}

function OnTriggerEnter (other : Collider) {

	if (other.gameObject == player) {

		Destroy(this.gameObject);
			
	}

}