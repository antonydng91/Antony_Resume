

export function getResumeHeadings(){
    return new Promise((resolve)=>{
         setTimeout(() => {
             resolve(
              ["Summary","LinkedIn","GitHub","Skills","Offers Received","Work History","Education","Project Details","Certifcations"] 
             );
           }, 0);
         });
 
 
 }
  



