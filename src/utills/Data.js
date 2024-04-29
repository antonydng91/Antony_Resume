

export function getResumeHeadings(){
    return new Promise((resolve)=>{
         setTimeout(() => {
             resolve(
              ["Summary","LinkedIn","GitHub","Skills","Work History","Education","Project Details"] 
             );
           }, 0);
         });
 
 
 }
  



