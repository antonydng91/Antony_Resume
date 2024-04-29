

export function getHeadings(){
    return new Promise((resolve)=>{
         setTimeout(() => {
             resolve(
              [
                "Summary","LinkedIn","Skills","Work History","Education","Project Details","GitHub"
        
               ]
               
             );
           }, 0);
         });
 
 
 }
  



