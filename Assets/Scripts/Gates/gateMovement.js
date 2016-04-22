#pragma strict

	private var animatorGate : Animator;
	private var canOpenGates : boolean;
	private var isOpen : boolean = false;
	private var gameController : GameObject;

function Awake () {

	gameController = GameObject.FindWithTag("GameController");

	animatorGate = GetComponent(Animator);

	//OPEN GATES PERMISSION
	canOpenGates = true;

}

function Update () {
}

function OnTriggerEnter (collider : Collider) {

	if (collider.gameObject.tag == "Player" && !isOpen) {
		animatorGate.SetBool("openGate", true);
		isOpen = true;
	}

	if (collider.gameObject.tag == "Enemy" && !isOpen) {
		animatorGate.SetBool("openGate", true);
		isOpen = true;
	}

}

function OnTriggerExit (collider : Collider) {

	if (collider.gameObject.tag == "Player" && isOpen) {
		animatorGate.SetBool("openGate", false);
		isOpen = false;
	}

	if (collider.gameObject.tag == "Enemy" && isOpen && !gameController.GetComponent(EnemyWavesController).inWave) {
		animatorGate.SetBool("openGate", false);
		isOpen = false;
	}

}
