import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import LoadingPage from '../../utils/LoadingPage';


const initialData = {
  writerName: '',
  writerTagline: '',
  title: '',
  date: '',
  minutes: '',
  body: '',
  tag:null,
  profilePic:"",
  links:{
    fb:null,
    insta:null,
    twitter:null,
    linkedin:null
  },
  blogPics:""
};



function EditBlog() {
  const [blogData, setblogData] = useState(initialData);
  const [getblogData, setgetblogData] = useState([])
  const [loading, setLoading] = useState(false);
  const param = useParams();
  


  console.log(getblogData);
  // calling data to display 
  const fetchblog = async () => {
    setLoading(true);
    try {
      const call1 = await axios.get(`https://flywise-admin.herokuapp.com/api/blogById/${param.id}`);
      setgetblogData(call1.data.blog)
      setblogData(call1.data.blog)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchblog();
  }, []);


  // handlechange functions

  const handleChange = (e) => {
    const { name } = e.target;
    setblogData({ ...blogData, [name]: e.target.value });
  };

  const handleinput2 = (e)=>{        
    setblogData({...blogData, profilePic: e.target.files[0]});
  }
  
  const handleinput3 = (e)=>{        
    setblogData({...blogData, blogPics: e.target.files[0]});
   }

  const handlelinks = (e)=>{
    const { name } = e.target;
    setblogData({...blogData, links:{...blogData.links,[name]:e.target.value} });
  }


  //submit form


  const handlesubmit = ()=>{
    console.log("ok");
  }

//display date input box


  let blogdate = getblogData.date;
  blogdate = moment(blogdate).format('YYYY-MM-DD')




  return (
    <>
    <div className='addEmployee-container'>
    
      {loading ? (
      <LoadingPage />
            ) : (
              
              <div className='addEmployee-personalDetails'>                  
                  {/* 1st row */}

                  <div className='addEmployee-alignRow'>
                    <div className='addEmployee-inputFieldDiv'>
                      <label className='addEmployee-inputLabel'>Writer Name*</label>
                      <input
                        type='text'
                        name='writerName'
                        placeholder='Full Name'
                        defaultValue={getblogData.writerName}
                        className='addEmployee-inputField'
                        onChange={handleChange}
                      />
                    </div>
                    <div className='addEmployee-inputFieldDiv'>
                      <label className='addEmployee-inputLabel'>Writer Tagline*</label>
                      <input
                        type='text'
                        name='writerTagline'
                        defaultValue={getblogData.writerTagline}
                        placeholder='Writer Tagling'
                        className='addEmployee-inputField'
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  {/* 2nd row */}

                  <div className='addEmployee-alignRow'>
                  <div className='addEmployee-inputFieldDiv'>
                      <label className='addEmployee-inputLabel'>Date</label>
                      <input
                        type='date'
                        name='date'
                        placeholder='Date'
                        defaultValue={blogdate}
                        className='addEmployee-inputField'
                        onChange={handleChange}
                      />
                    </div>


                    <div className='addEmployee-inputFieldDiv'>
                        <label className='addEmployee-inputLabel'>Time To Read (Minutes)</label>
                        <input  name="minutes" 
                        defaultValue={getblogData.minutes}
                        onChange={handleChange} className='addEmployee-inputField' type="number"  />
                    </div>

                  </div>


                  {/* 3rd row */}

                  <div className='addEmployee-alignRow'>
                    <div className='addEmployee-inputFieldDiv'>
                      <label className='addEmployee-inputLabel'>Title</label>
                      <input
                        type='text'
                        name='title'
                        defaultValue={getblogData.title}
                        placeholder='Title Tagling'
                        className='addEmployee-inputField'
                        onChange={handleChange}
                      />
                    </div>
                    <div className='addEmployee-inputFieldDiv'>
                      <label className='addEmployee-inputLabel'>Writer Profile</label>
                      <input
                        type='file'
                        name='profilePic'
                        placeholder='Writer Profile'
                        className='addEmployee-inputField'
                        onChange={handleinput2}
                      />
                    </div>
                    
                  </div>

                  {/* 4th row */}

                  <div className='addEmployee-alignRow'>
                        <div className='addEmployee-inputFieldDiv'>
                          <label className='addEmployee-inputLabel'>Hashtags</label>
                          <input className='addEmployee-inputField' onChange={handleChange} type="text" name='tag' />
                        </div>
                      
                      <div className='addEmployee-inputFieldDiv'>
                      <label className='addEmployee-inputLabel'>Blog Pic</label>
                      <input
                        type='file'
                        name='blogPics'
                        placeholder='Blog Pic'
                        className='addEmployee-inputField'
                        onChange={handleinput3}
                      />
                    </div>
                </div>

                {/* 5th row */}
                  <div className='addEmployee-alignRow'>
                    <div className='addEmployee-inputFieldDiv'>
                          <label className='addEmployee-inputLabel'>Author's Socials</label>
                          <div className='addEmployee-inputField'>
                      
                          <label className='addEmployee-inputLabel'>Facebook</label>
                              <input defaultValue={getblogData?.links?.fb } className='addEmployee-inputField' type="text" onChange={handlelinks} name='fb' />
                      
                          <label className='addEmployee-inputLabel'>Linkedin</label>
                              <input className='addEmployee-inputField' defaultValue={getblogData?.links?.linkedin} type="text" onChange={handlelinks} name='linkedin' />
                      
                          <label className='addEmployee-inputLabel'>Instagram</label>
                              <input className='addEmployee-inputField' defaultValue={getblogData?.links?.insta} type="text"  onChange={handlelinks} name='insta' />
                      11
                          <label className='addEmployee-inputLabel'>Twitter</label>
                              <input className='addEmployee-inputField' defaultValue={getblogData?.links?.twitter} type="text" onChange={handlelinks} name='twitter' />
                          </div>
                        </div>


                  <div className='addEmployee-inputFieldDiv'>
                      <label className='addEmployee-inputLabel'>Body</label>
                    
                      <textarea name="body" 
                      className='addEmployee-inputField'
                      defaultValue={getblogData.body}
                      onChange={handleChange} id="" cols="30" rows="10"></textarea>
                    </div>
                  </div>



                  <div className='addEmployee-submitDetailDiv'>
                    <button
                      className='addEmployee-submitDetailBtn'
                      onClick={handlesubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
    )}
  </div>
    </>
  )
}

export default EditBlog