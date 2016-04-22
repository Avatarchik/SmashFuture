#pragma strict

	var projectilePrefab : Transform;
	var projectileSpeed : float = 200;
	var projectileSpawnPoint : Transform;

	var fireRate : float = 0.2f;
	var nextFire : float = 0.0f;

	var fire = "Fire1";
	var switchAutomaticStyle = "Fire2";
	var automaticStyle = false;

	var fireSound : AudioSource;
	var Muzzle : Renderer;
	var metalParticle : GameObject;
	var bloodParticle : GameObject;

function Awake () {

	fireSound = gameObject.GetComponent(AudioSource);

}

function Update () {

	//CREATING A RAY BY THE CENTER OF THE SCREEN
	//var ray: Ray = Camera.main.ViewportPointToRay(Vector3(0.5,0.5,0));

	//CREATING A RAY BY THE PROJECTSPAWNPOINT
	var ray : Ray;
	ray = new Ray (projectileSpawnPoint.position, projectileSpawnPoint.TransformDirection(Vector3.forward));

	var hit : RaycastHit;

	Muzzle.enabled = false;

	//LAUNCH A RAY BY THE ORIGIN TO SEE THE TRAGETORY TO DEBUG
 	//Debug.DrawRay(ray.origin, ray.direction * 1000, Color.red);

 	if (Input.GetButtonDown(switchAutomaticStyle)) {

 		automaticStyle = !automaticStyle;

 	}

 	if (!automaticStyle) {
		if (Input.GetButtonDown(fire)){

			Fire(ray, hit);
			fireSound.Play();

	 	}
	} else {

		if (Input.GetButton(fire) && Time.time > nextFire){

			nextFire = Time.time + fireRate;
			Fire(ray, hit);

	 	}

	}
}

function Fire (ray : Ray, hit : RaycastHit) {

 		var direction : Vector3;

 		if (Physics.Raycast(ray, hit)){

			//GET DIRECTION OF HIT POINT FROM RAY
 			direction = (hit.point - projectileSpawnPoint.position).normalized;

 		} else {

 			direction = ray.direction;

 		}

 			var rotation = Quaternion.FromToRotation(projectilePrefab.forward, direction);

 			//INSTATIATE THE PROJECTILE (Disable, will use just the hit cause the bullet don't work very well)
 			//var projectile = Instantiate(projectilePrefab, projectileSpawnPoint.position, rotation);
 			//projectile.GetComponent(Rigidbody).velocity = direction * projectileSpeed;

			//FIRE EFFECTS
			// Play shotsound
			fireSound.Play();

			//Transform muzzle
			Muzzle.enabled = true;

			//Collision Efects
			if (hit.collider.tag == "Enemy") {
				Instantiate (bloodParticle, hit.point, projectileSpawnPoint.rotation);
			}
			else
				Instantiate (metalParticle, hit.point, projectileSpawnPoint.rotation);

			//pistol bullets are to fast so, some times the enemy collider don't detect then,
			//so, we need to use just the raycast
			if (hit.collider.gameObject.tag == "Enemy") {

					Destroy (hit.collider.gameObject);

			}

}
