import React,{useEffect,useState} from 'react';
import Oneuniveristy from './Oneuniveristy';
import LoadingPage from '../../utils/LoadingPage';
import axios from 'axios';
import '../../../styles/ArtistsTable.css';

const ArtistsTable = (props) => {
  const [universityData, setuniversityData] = useState([])
  const [loading, setLoading] = useState(false);
  // useEffects
 
  useEffect(() => {
    unicall();
    return () => {
      setuniversityData([]); // This worked for me
    };

  }, [])
 
 
  //  functions

  const unicall =async()=>{
    setLoading(true);
   
    try {
      const call1 = await axios.get("https://flywise-admin.herokuapp.com/api/allUni");
        setuniversityData(call1.data.allUni);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
  }



  return (
   <>
    {loading ? (
      <LoadingPage />
    ) : (
    <div className='table-wrapper' id='#scrollBar'>
      <table className='fl-table'>
        <thead>
          <tr>
            <th>University Name</th>
            <th>University Pic</th>
            <th>State</th>
            <th>Country Code</th>
            <th>Level</th>
            <th>Courses</th>
            <th>Add Courses</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {universityData?(
            universityData.map((university,index)=>{
                 return(  <Oneuniveristy
                            id={university._id}
                            key={index}
                            photo = {university.photo}
                            name={university.name}
                            level={university.level}
                            country={university.country}
                            state={university.state}
                          />
            )
            })):("no Data")
          }             
        </tbody>
      </table>
    </div>
    )}
  </>
  );
};

export default ArtistsTable;
