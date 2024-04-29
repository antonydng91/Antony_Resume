

export function getResumeHeadings(){
    return new Promise((resolve)=>{
         setTimeout(() => {
             resolve(
              ["Summary","LinkedIn","GitHub","Skills","Offers Received","Certifcations","Work History","Education","Project Details"] 
             );
           }, 0);
         });
 
 
 }
  



