import React from "react";
import Contact from "./Components"
import './style.css'

function UserContacts(props) {
    let data = {
        name:"Abdullah",
        address:"cosmosrdx3e3rj3rc23rc3rx2rc3ccv262cc4"
    }
    return(
        <>
           <div className="dashboardTitle">
              <h3>Contacts</h3>
           </div>
           <div className="details mainContacts">
                <Contact index={1} data={data}/>
           </div>
       </>
    )
}

export default UserContacts