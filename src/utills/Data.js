

export function getResumeHeadings(){
    return new Promise((resolve)=>{
         setTimeout(() => {
             resolve(
              ["Summary","LinkedIn","GitHub","Skills","Offers/Achivements","Certifcations","Work History","Education","Project Details"] 
             );
           }, 0);
         });
 
 
 }
  



