#pragma strict

public var health : float;
public var damageImage : UI.Image;
public var flashSpeed : float = 5f;
public var flashColor : Color = new Color(1f, 0f, 0f, 0.1f);

private var damaged : boolean = false;


function Start() {
	
}


function Update(){
	if(damaged) {
		damageImage.color = flashColor;
	} else {
		damageImage.color = Color.Lerp(damageImage.color, Color.clear, flashSpeed * Time.deltaTime);
	}
	damaged = false;
}


function TakeDamage(damage : int){
	damaged = true;
}