#pragma strict

	//FORWARD, BACKWARD, LEFTWARD AND RIGHTWARD VARIABLES
	var movement : Vector3;
	var speed : float = 10f;

	var horizontal : float;
	var vertical : float;

	//TURN LEFT, TURN RIGHT VARIABLES
	var lookSensitivity : float = 5f;
	var lookSmoothDamp : float = 0.1f;
	var speedRotation: float = 4.5f;

	var yRotation : float;
	var currentYRotation : float;
	var yRotationV : float;

	//UP AND DOWN ARMS MOVIMENTATION VARIABLES
	var canMoveArms : boolean = false;

	var rightArm : Transform; //RIGTH_ARM
	var leftArm : Transform;  //LEFT_ARM

	var xRotation : float;
	var currentXRotation : float;
	var xRotationV : float;

function Awake () {
}

function FixedUpdate () {

	//GET FORWARD, BACKWARD, LEFTWARD AND RIGHTWARD VALUES
	horizontal = Input.GetAxisRaw("Horizontal");
	vertical = Input.GetAxisRaw("Vertical");

	//GET TURN LEFT, TURN RIGHT VALUES
	yRotation += Input.GetAxis ("Mouse X") * lookSensitivity;

	//GET UP AND DOWN ARMS MOVIMENTATION VALUES
	xRotation -= Input.GetAxis ("Mouse Y") * lookSensitivity;
  xRotation = Mathf.Clamp(xRotation, -60, 60);

	//FORWARD, BACKWARD, LEFTWARD AND RIGHTWARD MOVIMENTATION
	BodyMove(horizontal, vertical);

	//TURN LEFT, TURN RIGHT MOVIMENTATION
	BodyTurn(yRotation);

	//UP AND DOWN ARMS MOVIMENTATION
	if (canMoveArms) {
		ArmMove(xRotation);
	}

}

//FORWARD, BACKWARD, LEFTWARD AND RIGHTWARD MOVIMENTATION
function BodyMove (horizontal : float, vertical : float) {

	movement.Set(horizontal, 0f, vertical);

	movement = movement.normalized * speed * Time.deltaTime;

	transform.Translate(movement);

}

//TURN LEFT, TURN RIGHT MOVIMENTATION
function BodyTurn (yRotation : float) {

	currentYRotation = Mathf.SmoothDamp (currentYRotation, yRotation, yRotationV, lookSmoothDamp);
	transform.rotation = Quaternion.Euler (0f, currentYRotation * speedRotation, 0f);

}

//UP AND DOWN ARMS MOVIMENTATION
function ArmMove (xRotation : float) {

	currentXRotation = Mathf.SmoothDamp (currentXRotation, xRotation, xRotationV, lookSmoothDamp);

  rightArm.transform.localEulerAngles = new Vector3(currentXRotation, rightArm.transform.localEulerAngles.y, rightArm.transform.localEulerAngles.z);
  leftArm.transform.localEulerAngles = new Vector3(currentXRotation, leftArm.transform.localEulerAngles.y, leftArm.transform.localEulerAngles.z);

}
