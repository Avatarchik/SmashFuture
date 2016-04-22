#pragma strict

private var player : Transform;
private var nav : NavMeshAgent;
private var gameController : GameObject;
private var scoreValue : int = 500;

function Awake () {

	player = GameObject.FindGameObjectWithTag("Player").transform;
	nav = GetComponent.<NavMeshAgent>();
	nav.SetDestination(player.position);

	gameController = GameObject.FindWithTag("GameController");

}

function FixedUpdate () {
	nav.SetDestination(player.position);
}

function OnCollisionEnter(collision: Collision) {
	if (collision.gameObject.tag == "Bullet") {
		Destroy(this.gameObject);
	}
}

function OnDestroy () {
	gameController.GetComponent(GameController).score = gameController.GetComponent(GameController).score + scoreValue;
}
