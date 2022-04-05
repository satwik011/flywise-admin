import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import '../../styles/AddEmployeeForm.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

const AddBlogForm = () => {
  
  const [blogData, setblogData] = useState(initialData);
  const history = useHistory();

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

AddBlogForm.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]
AddBlogForm.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}


  const handlesubmit = async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('writerName', blogData.writerName);
    formData.append('writerTagline', blogData.writerTagline);
    formData.append('title', blogData.title);
    formData.append('date', blogData.date);
    formData.append('body', blogData.body);
    formData.append('tag', blogData.tag);
    formData.append('profilePic', blogData.profilePic);
    formData.append('blogPics', blogData.blogPics);
    formData.append('minutes', blogData.minutes);
    formData.append('links[fb]', blogData.links.fb);
    formData.append('links[insta]', blogData.links.insta);
    formData.append('links[twitter]', blogData.links.twitter);
    formData.append('links[linkedin]', blogData.links.linkedin);
    
    try {
         await axios.post("https://flywise-admin.herokuapp.com/api/createBlog",formData)
         history.push('/blogs');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='addEmployee-container'>
      
        <div className='addEmployee-personalDetails'>
  
          {/* 1st row */}
  
          <div className='addEmployee-alignRow'>
            <div className='addEmployee-inputFieldDiv'>
              <label className='addEmployee-inputLabel'>Writer Name*</label>
              <input
                type='text'
                name='writerName'
                placeholder='Full Name'
                className='addEmployee-inputField'
                onChange={handleChange}
              />
            </div>
            <div className='addEmployee-inputFieldDiv'>
              <label className='addEmployee-inputLabel'>Writer Tagline*</label>
              <input
                type='text'
                name='writerTagline'
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
                className='addEmployee-inputField'
                onChange={handleChange}
              />
            </div>
        

            <div className='addEmployee-inputFieldDiv'>
                <label className='addEmployee-inputLabel'>Time To Read (Minutes)</label>
                <input  name="minutes" onChange={handleChange} className='addEmployee-inputField' type="number"  />
            </div>

          </div>


          {/* 3rd row */}

          <div className='addEmployee-alignRow'>
            <div className='addEmployee-inputFieldDiv'>
              <label className='addEmployee-inputLabel'>Title</label>
              <input
                type='text'
                name='title'
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
                      <input className='addEmployee-inputField' type="text" onChange={handlelinks} name='fb' />
                  <label className='addEmployee-inputLabel'>Linkedin</label>
                      <input className='addEmployee-inputField' type="text" onChange={handlelinks} name='linkedin' />
                         </div>
                </div>
        
                  <div className='addEmployee-inputFieldDiv'>
                  <label className='addEmployee-inputLabel'>Author's Socials</label>
                    <div className='addEmployee-inputField'>
                      <label className='addEmployee-inputLabel'>Instagram</label>
                          <input className='addEmployee-inputField' type="text" onChange={handlelinks} name='insta' />
                      <label className='addEmployee-inputLabel'>Twitter</label>
                          <input className='addEmployee-inputField' type="text" onChange={handlelinks} name='twitter' />
                    </div>
                  </div>   
          </div>

          <div className='addEmployee-alignRow'>
                       <div style={{marginTop:"20px",width:"100%"}}>
                        <label className='addEmployee-inputLabel'>Body</label>
                          <ReactQuill 
                             modules={AddBlogForm.modules}
                             formats={AddBlogForm.formats}
                            theme="snow"
                           onChange={(content, delta, source, editor)=>{ setblogData({...blogData,body:editor.getHTML()}) }}  / >
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
    </div>
  );
};




export default AddBlogForm;
