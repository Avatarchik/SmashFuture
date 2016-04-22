#pragma strict

  var crosshairImage : Texture2D;
  var ray : Ray;
  var hit : RaycastHit;
  var projectileSpawnPoint : Transform;
  var xMin : float;
  var yMin : float;

  var hitPointScreenPosition : Vector3;

function Awake () {

  xMin = (Screen.width / 2) - ((crosshairImage.width * 0.5) / 2);
  yMin = (Screen.height / 2) - ((crosshairImage.height * 0.5) / 2);

}

function OnGUI () {

    ray = new Ray (projectileSpawnPoint.position, projectileSpawnPoint.TransformDirection(Vector3.forward));
    hitPointScreenPosition = Camera.main.WorldToScreenPoint(hit.point);

    if (Physics.Raycast(ray, hit)) {
      xMin = Screen.width - (Screen.width - hitPointScreenPosition.x) - ((crosshairImage.width * 0.5) / 2);
      yMin = (Screen.height - hitPointScreenPosition.y) - ((crosshairImage.height * 0.5) / 2);
    }

    GUI.DrawTexture(new Rect(xMin, yMin, crosshairImage.width * 0.5, crosshairImage.height * 0.5), crosshairImage);

 }
