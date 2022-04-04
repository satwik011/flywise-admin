import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import '../../../styles/ArtistsTable.css';
import Singleblog from './Singleblog';
import LoadingPage from '../../utils/LoadingPage';
import axios from 'axios'

const EmployeesTable = () => {
  const [allblogData, setallblogData] = useState([])
  const [loading, setLoading] = useState(false);
  
  const fetchblogList = async () => {
    setLoading(true);
    try {
      const call1 = await axios.get("https://flywise-admin.herokuapp.com/api/allBlogs");
      setallblogData(call1.data.allBlogs)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchblogList();
  }, []);

  return (
    <div className='table-wrapper' id='#scrollBar'>
  {loading ? (
      <LoadingPage />
            ) : (
              
      <table className='fl-table'>
        <thead>
          <tr>
            <th>Author</th>
            <th>Date</th>
            <th>Minutes</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          allblogData.map((blog,ind)=>{
               return <Singleblog
                  key={ind}
                  id={blog._id}
                  body={blog.body}
                  writerName={blog.writerName}
                  title={blog.title}
                  tag={blog.tag}
                  date={blog.date}
                  links={blog.links}
                  minutes={blog.minutes}
               />

          })
        }
        </tbody>
      </table>
    )}
    </div>
  );
};

export default EmployeesTable;
