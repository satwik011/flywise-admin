import React,{useState} from 'react'
import { Navigate } from 'react-router'
import { Redirect } from 'react-router-dom'
function Privateroute({children}) {
    const [login, setlogin] = useState(false)
    const Adminauth=()=> {
        const res = JSON.parse(sessionStorage.getItem('flywise'))
        if(res){
            setlogin(true)
        }
      }
      React.useEffect(() => {
          Adminauth()
      }, [])
    
    
  return (
    <> {
        login?children:(<Redirect from="*" to="/" />)
    }
    </>
  )
}

export default Privateroute