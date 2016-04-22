#pragma strict

public var enemies : GameObject[];
public var spawnArea : Transform[];
public var timeToStart : float;
public var waveInterval : float;
public var numberOfEnemies : int;

private var wave : int = 1;
private var timeCount : float = 0.0;
private var isFirstWave : boolean = true;
public var canStartWave : boolean = false;
public var inWave : boolean = false;

private var gameController : GameObject;

function Awake() {
	gameController = GameObject.FindWithTag("GameController");
}

function FixedUpdate() {
	if(!hasEnemies()) {
		if (isFirstWave) {
			manageFirstWave();
		} else {
			manageIntervalWaves();
		}
	}
	Debug.Log(timeCount);
}


private function hasEnemies() {
	var enemiesCount : int = GameObject.FindGameObjectsWithTag("Enemy").length;
	Debug.Log("Enemy count = " +enemiesCount);
	if(enemiesCount > 0) {
		return true;
	} else {
		return false;
	}
}


private function manageFirstWave() {
	if (timeCount >= timeToStart && canStartWave == true) {
		generateWave();
		isFirstWave = false;
		timeCount = 0.0;
	} else {
		timeCount += Time.deltaTime;
	}
}


private function manageIntervalWaves() {
	if (timeCount >= waveInterval && canStartWave == true) {
		generateWave();
		timeCount = 0.0;

	} else {
		timeCount += Time.deltaTime;
	}
}


private function generateWave() {
	var spawnPos : int = Random.Range(0, spawnArea.length);
	var enemiesOnWave : int = Random.Range(1, numberOfEnemies);
	inWave = true;
	for (var i : int = 0; i < enemiesOnWave; i++) {
		yield WaitForSeconds(1);
		Instantiate(enemies[0], spawnArea[spawnPos].position, Quaternion.identity);
	}
	inWave = false;
}
