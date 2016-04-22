#pragma strict

    //Defense Mode Variables - Feito
    var capsuleOfShield               : GameObject;   //6400 pts  - 45 seconds
    var capsuleOfShieldNextPointSpawn : float;
    var capsuleOfShieldRatePointSpawn : float;

    var boomerangOfFlight               : GameObject; //9600 pts  - Until be used
    var boomerangOfFlightNextPointSpawn : float;
    var boomerangOfFlightRatePointSpawn : float;

    var robotFriend               : GameObject;       //12800 pts - 45 seconds
    var robotFriendNextPointSpawn : float;
    var robotFriendRatePointSpawn : float;

    //Weapons Variables - Feito
    var tripleShot                : GameObject;   //Appears every 2 minutes - 20 bullets
    var tripleShotNextTimeSpawn   : float;
    var tripleShotRateTimeSpawn   : float;

    var greenPump               : GameObject;     //Appears every 5:30 minutes or 25600 pts - 30 bullets
    var greenPumpNextTimeSpawn  : float;
    var greenPumpRateTimeSpawn  : float;
    var greenPumpNextPointSpawn : float;
    var greenPumpRatePointSpawn : float;

    var shotMissil                : GameObject;   //Appears every 3 minutes or 16000 pts    - 30 bullets
    var shotMissilNextTimeSpawn   : float;
    var shotMissilRateTimeSpawn   : float;
    var shotMissilNextPointSpawn  : float;
    var shotMissilRatePointSpawn  : float;

    var fireBall              : GameObject;       //Appears in final showdown               - 50 bullets
    var fireBallNextTimeSpawn : float;
    var fireBallRateTimeSpawn : float;

    //Money Variables
    var money               : GameObject;         //1000 pts  - 20 seconds
    var moneyNextPointSpawn : float;
    var moneyRatePointSpawn : float;

    var silverBar                : GameObject;    //1500 pts  - 15 seconds
    var silverBarNextPointSpawn  : float;
    var silverBarRatePointSpawn  : float;

    var goldBar             : GameObject;         //2000 pts  - 10 seconds
    var goldBarNextPointSpawn  : float;
    var goldBarRatePointSpawn  : float;

    //Bonus Variables
    var greenBox  : GameObject;         //2250 pts  - 20 seconds
    var goldBox   : GameObject;         //2500 pts  - 15 seconds
    var redBox    : GameObject;         //2750 pts  - 10 seconds

    //Extra Variables
    var life          : GameObject;     //100000  - 15 seconds
    var beautifulGirl : GameObject;     //150000  - 10 seconds
    var key           : GameObject;     //        - 10 seconds

    private var gameController : GameObject;
    private var score : GameObject;


function Start () {

    gameController = GameObject.FindWithTag("GameController");

}

function Update () {

    //WeaponsSpawn
    SpawnWeapons ();
    //DefenseModeSpawn
    SpawnDefenseMode ();
    //Money
    SpawnMoney ();

}

//Drop the item into the currentArena
function SpawnPrize (prize : GameObject) {

    var rndPosWithin : Vector3;

    rndPosWithin = Vector3(Random.Range(gameController.GetComponent(GameController).currentArena.GetComponent(Arena).xMin, gameController.GetComponent(GameController).currentArena.GetComponent(Arena).xMax), 20, Random.Range(gameController.GetComponent(GameController).currentArena.GetComponent(Arena).zMin, gameController.GetComponent(GameController).currentArena.GetComponent(Arena).zMax));

    Instantiate(prize, rndPosWithin, Quaternion.Euler(0, 0, 0));

}

//WeaponsSpawn
function SpawnWeapons () {

  //tripleShot
  if (Time.time >= tripleShotNextTimeSpawn) {

      tripleShotNextTimeSpawn = Time.time + tripleShotRateTimeSpawn;

      SpawnPrize (tripleShot);
  }
  //greenPump
  if (Time.time >= greenPumpNextTimeSpawn || gameController.GetComponent(GameController).score >= greenPumpNextPointSpawn) {

      greenPumpNextTimeSpawn = Time.time + greenPumpRateTimeSpawn;
      greenPumpNextPointSpawn = gameController.GetComponent(GameController).score + greenPumpRatePointSpawn;

      SpawnPrize (greenPump);
  }
  //shotMissil
  if (Time.time >= shotMissilNextTimeSpawn || gameController.GetComponent(GameController).score >= shotMissilNextPointSpawn) {

      shotMissilNextTimeSpawn = Time.time + shotMissilRateTimeSpawn;
      shotMissilNextPointSpawn = gameController.GetComponent(GameController).score + shotMissilRatePointSpawn;

      SpawnPrize (shotMissil);
  }
  //fireBall

}

//DefenseModeSpawn
function SpawnDefenseMode () {

  //capsuleOfShield
  if (gameController.GetComponent(GameController).score >= capsuleOfShieldNextPointSpawn) {

      capsuleOfShieldNextPointSpawn = Time.time + capsuleOfShieldRatePointSpawn;

      SpawnPrize (capsuleOfShield);
  }
  //boomerangOfFlight
  if (gameController.GetComponent(GameController).score >= boomerangOfFlightNextPointSpawn) {

      boomerangOfFlightNextPointSpawn = Time.time + boomerangOfFlightRatePointSpawn;

      SpawnPrize (boomerangOfFlight);
  }
  //robotFriend
  if (gameController.GetComponent(GameController).score >= robotFriendNextPointSpawn) {

      robotFriendNextPointSpawn = Time.time + robotFriendRatePointSpawn;

      SpawnPrize (robotFriend);
  }
}

function SpawnMoney () {

  //money
  if (gameController.GetComponent(GameController).score >= moneyNextPointSpawn) {

      moneyNextPointSpawn = Time.time + moneyRatePointSpawn;

      SpawnPrize (money);
  }
  //silverBar
  if (gameController.GetComponent(GameController).score >= silverBarNextPointSpawn) {

      silverBarNextPointSpawn = Time.time + silverBarRatePointSpawn;

      SpawnPrize (silverBar);
  }
  //goldBar
  if (gameController.GetComponent(GameController).score >= goldBarNextPointSpawn) {

      goldBarNextPointSpawn = Time.time + goldBarRatePointSpawn;

      SpawnPrize (goldBar);
  }

}
