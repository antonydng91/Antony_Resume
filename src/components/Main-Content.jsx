

import {useState,useEffect} from 'react' ;
import {getResumeHeadings } from '../utills/Data';
import LinkedIn from './LinkedIn';
import Summary from './Summary';
import Skills from './Skills';
import WorkHistory from './Work-History';
import Education from './Education';
import ProjectDetails from './Project-Details';
import JobOffer from './Offer-Letters';
import Github from './Github';
import Certifications from './Certifcations';


export default function Content(){
    const [headings,setHeadings]  =useState([]);

    useEffect(()=>{ 
    ( async function(){
        let headings=await getResumeHeadings();
        setHeadings(headings);
     })()
    },[])

 return (<> 
 <main>
 {headings.length>0 && headings.map((item,index)=>{
    
return <section key={index} className="sections">
       <aside><p>{item}</p></aside>
     {(() => {
        switch (item) {
          case 'Summary':
            return <article><Summary/></article>
          case 'LinkedIn':
            return <article><LinkedIn /></article>
          case 'GitHub':
              return <article><Github/></article>
          case 'Skills':
            return <article><Skills/></article>
          case 'Work History':
              return <article><WorkHistory/></article>
          case 'Education':
                return <article><Education/></article>
          case 'Project Details':
              return <article><ProjectDetails/></article>
          case 'Offers Received':
            return <article><JobOffer/></article>
          case 'Certifcations':
              return <article><Certifications/></article>    
          default:
            return null
        }
      })()}
</section>
})}
 </main></>)


}