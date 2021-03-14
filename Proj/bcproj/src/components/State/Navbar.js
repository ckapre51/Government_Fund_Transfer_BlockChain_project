import React from 'react'
// import {AppBar} from 'material-ui@core/AppBar'
import {AppBar} from '@material-ui/core'
import {Tab} from '@material-ui/core'
import {Tabs} from '@material-ui/core'
import Request from './Request'
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
          State Government
        </h1>
        <AppBar position="static">
          <Tabs value={value} onChange={handleTabs} centered>
            <Tab label="Allocation to Contractors" />
            <Tab label="Request to Centre"/>
            <Tab label="All transaction"/>
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
      Allocation
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Request></Request>
    </TabPanel>
    <TabPanel value={value} index={2}>
      All transaction
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
