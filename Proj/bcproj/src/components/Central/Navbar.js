import React from 'react'
// import {AppBar} from 'material-ui@core/AppBar'
import {AppBar} from '@material-ui/core'
import {Tab} from '@material-ui/core'
import {Tabs} from '@material-ui/core'
import CRequest from './CRequest'
import CAllocation from './CAllocation'
// import {TabPanel} from '@material-ui/lab'
// import {TabPanel} from '@material-ui/core'



function Navbar() {

    const [value,setValue]=React.useState(0)
    const handleTabs=(e,val)=>{
      console.warn(val)
      setValue(val)
    }
    return(
      <div>
        <h1>
          Central Government
        </h1>
        <AppBar position="static">
          <Tabs value={value} onChange={handleTabs} centered>
            <Tab label="Allocation" />
            <Tab label="Requests"/>
            <Tab label="All transaction"/>
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
    
      <CAllocation></CAllocation>
    </TabPanel>
    <TabPanel value={value} index={1}>
  
      <CRequest></CRequest>
    </TabPanel>
    <TabPanel value={value} index={2}>
    
    </TabPanel>
      </div>
    );
}


function TabPanel(props) {
const {children,value,index}=props

    return (<div>
       { value==index &&(
           <h1>{children}</h1>
       )
} 
        {/* ) */}
    </div>)
}

export default Navbar
