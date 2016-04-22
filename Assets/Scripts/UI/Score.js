#pragma strict

	private var gameController: GameObject;
	private var scoreText : UI.Text;

function Awake () {

	scoreText = GetComponent(UI.Text);
	gameController = GameObject.FindWithTag("GameController");

}

function Update () {

	scoreText.text = "$ " + gameController.GetComponent(GameController).score;

}
