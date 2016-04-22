#pragma strict


function Awake () {

}

function FixedUpdate () {

}

function OnCollisionEnter(collision: Collision) {

	Destroy(this.gameObject);

}