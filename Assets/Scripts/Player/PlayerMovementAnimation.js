#pragma strict

	var horizontal : float;
	var vertical : float;

	var walkingAnimator : Animator;

function Awake () {

	walkingAnimator = GetComponent(Animator);
	
}

function FixedUpdate () {
	
	horizontal = Input.GetAxisRaw("Horizontal");
	vertical = Input.GetAxisRaw("Vertical");
	
	//WALKING ANIMATION
	WalkingAnimation(horizontal, vertical);

}

//WALKING ANIMATION
function WalkingAnimation (horizontal, vertical) {
	
	var walking;
	
	walking = (horizontal != 0f || vertical != 0f);

	walkingAnimator.SetBool("isWalking", walking);

}