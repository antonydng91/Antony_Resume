

import {useState,useEffect} from 'react' ;

import {getHeadings } from '../utills/data';
import UrlComponent from './url-component';
import SummaryComponent from './summary-component';
import SkillsComponent from './skills-component';
import WorkHistory from './work-history';
import Education from './education';
import ProjectDetails from './project-details';
import GithubComponent from './github'


export default function Content(){
    

    const [headings,setHeadings]  =useState([]);

    useEffect(()=>{

    ( async function(){
        let headings=await getHeadings();
        setHeadings(headings)


     })()
    },[])

    const setTheColor=(e)=>{

       e.target.classList.add('active')
    }

    return (<><main>


{headings.length>0 && headings.map((item,index)=>{
    

return    <section className="sections">
     <aside><p>{item}</p></aside>
     {(() => {
        switch (item) {
            case 'Summary':
                return <article><SummaryComponent/></article>
          case 'LinkedIn':
            return <article><UrlComponent /></article>
            case 'Skills':
            return <article><SkillsComponent/></article>
            case 'Work History':
              return <article><WorkHistory/></article>
            case 'Education':
                return <article><Education/></article>
                case 'Project Details':
                  return <article><ProjectDetails/></article>

                  case 'GitHub':
                    return <article><GithubComponent/></article>
                   
          default:
            return null
        }
      })()}




</section>
})}
     

        
        
        </main></>)


}