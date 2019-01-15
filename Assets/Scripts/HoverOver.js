 #pragma strict
 
 var ray : Ray;
 var hit : RaycastHit;
 var OnPlay : boolean=false;
 var OnHowToPlay : boolean=false;

 function Update () 
 {
     ray = Camera.main.ScreenPointToRay(Input.mousePosition);

     if(Physics.Raycast(ray, hit))
     {
         Debug.Log(hit.collider.name);
         if(hit.collider.name== "PlayBT")
         {
           	OnPlay =true;
           	Debug.Log(OnPlay);
         }

         else
         {
         	OnPlay=false;
         }

         if(hit.collider.name== "HelpBT")
         {
         	OnHowToPlay=true;
         	Debug.Log(OnHowToPlay);
         }

         else
         {
         	OnHowToPlay=false;
         }
     }
 }
