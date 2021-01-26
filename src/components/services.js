import React from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

class Services extends React.Component{
    state={
        services:[
            {icon:<FaCocktail></FaCocktail>,
            title:"Free Cocktails",
        info:'ffosf fuifdbf fuffss fifbfs fubss fbbss vbvf iedis !'
    },
    {icon:<FaHiking/>,
        title:"Free Hiking",
    info:'ffosf fuifdbf fuffss fifbfs fubss fbbss vbvf iedis !'
},
{icon:<FaShuttleVan/>,
    title:"Free Van",
info:'ffosf fuifdbf fuffss fifbfs fubss fbbss vbvf iedis !'
},
{icon:<FaBeer/>,
    title:"Free Beer",
info:'ffosf fuifdbf fuffss fifbfs fubss fbbss vbvf iedis !'
}
        ]
    }
    render(){
        return(
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    { this.state.services.map((el,index)=>{
                        return <article key={index} className="service">
                            <span>{el.icon}</span>
                             <h6>{el.title}</h6>
                             <p>{el.info}</p>
                        </article>
                    })}
                 </div>
               
            </section>
        );
    };
}

export default Services;