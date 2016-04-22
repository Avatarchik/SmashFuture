#pragma strict

private var gameController : GameObject;

private var openArenaGates;

//SPAWNING LIMITS
var xMin : float;
var xMax : float;

var zMin : float;
var zMax : float;

//SPAWNING ARENAS
public var arenaSpawnArea : Transform[];

//ARENAS TO INSTANTIATE
public var arenasToInstantiate : GameObject[];

function Awake () {

    gameController = GameObject.FindWithTag("GameController");
    //openArenaGates = true;

}

function Update () {

}

function OnTriggerEnter (collider : Collider) {

    var transformAuxiliar : Transform;
    var arenasToDestroy : GameObject[];

		if (collider.gameObject.tag == "Player") {

        gameController.GetComponent(GameController).currentArena = this.gameObject;
        //SET ENEMIES SPAWN POINTS OF THE ARENA
        gameController.GetComponent(EnemyWavesController).spawnArea = arenaSpawnArea;
        //ALLOW ENEMIES SPAWN
        gameController.GetComponent(EnemyWavesController).canStartWave = true;

        //DESTROY ALL ARENAS WHAT YOU'RE NOT IN
        arenasToDestroy = GameObject.FindGameObjectsWithTag("Arena");

        for (var i : int = 0; i < arenasToDestroy.length; i++) {
            if (arenasToDestroy.length == 0)
                break;
            if (arenasToDestroy[i] != gameController.GetComponent(GameController).currentArena)
                Destroy(arenasToDestroy[i]);
        }

        //INSTANTIATE EACH ARENA WHAT IS POSSIBLE TO GO AFTER THIS ONE
        for (var j : int = 0; j < arenasToInstantiate.length; j++) {
            if (arenasToInstantiate.length == 0)
                break;
      		  Instantiate(arenasToInstantiate[j], arenasToInstantiate[j].transform.position, arenasToInstantiate[j].transform.rotation);
      	}

    }

}
