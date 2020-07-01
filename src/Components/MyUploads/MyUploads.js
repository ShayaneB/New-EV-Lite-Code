import React, {useEffect,useState,Fragment} from 'react'
import Modal from "react-modal";
import { FontAwesomeIcon } from "react-fontawesome";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFilePdf,faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import Action from '../Action/Action';
import Avatar from "react-avatar";
import './MyUploads.scss';
// import MobileMenu from '../MobileMenu/MobileMenu';
import Search from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";
// import NavigationItems from "../Navigation/NavigationItems/NavigationItems";

function MyUploads(){
  const[FileState,setFileState]=useState([]);
  const [modalIsOpen, setmodalIsOpen] = useState(false);

useEffect(()=>{
let FileState=[
{id:1 ,Item_Name:"Sample1.pdf",Uploaded_On:"2 Days Ago"},
{id:2 ,Item_Name:"Sample2.pdf",Uploaded_On:"12 Days Ago"},
{id:3 ,Item_Name:"Sample3.pdf",Uploaded_On:"20 Days Ago"}
];

setFileState(
  FileState.map(d=>{
    return{
    select:false,
    id:d.id,
    Item_Name:d.Item_Name,
    Uploaded_On:d.Uploaded_On
        };
      }));
    },[]);

    return( 
      <Fragment>

          <div id="second_section">
          <div>
            <h2>My Uploads</h2>
            <Search />

            <Avatar className='avtarStyle'
                color='#E07050' size='3rem'
                round 
                name="Shayane Basu" /> 
                
              <div className="filesUpload">
                <table id="doc_list">
                  <tr id="icons">
                    <th id="icon01">
                      <input type="checkbox" onChange={(e)=>{
                        let checked=e.target.checked;
                        setFileState(FileState.map((d)=>{
                          d.select=checked;
                          return d;
                        }));
                      }}/>
                    </th>
                    <th id="item-name">Item Name</th>
                    <th id="shared">Uploaded On</th>
                  
        <th id="action"><Action/></th>
        <Modal
            className="Modal"
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setmodalIsOpen(false)}
            style={{
              overlay: {
                backgroundColor:"rgba(0, 0, 0, 0.6)"
              }
            }}
          >
            <h2 className="Dh2">Delete Documents</h2>
            <p className="content Dh3">
              Are you sure you want to delete selected files?
              <br />
              <br /> NOTE:The deleted file will be stored in trash for 30 days.
            </p>

            <button
              className="btn-cancel btn-c"
              onClick={() => setmodalIsOpen(false)}
            >
              CANCEL
            </button>
            <button className="btn-continue btn-d">DELETE</button>
          </Modal>
                </tr>
                  <tbody>
                  { FileState.map((d,i) => (
                    <tr  key={d.id} id="first_details">
                    <td className="file_icon1">
                      <input onChange={(event)=>{
                          let checked=event.target.checked;
                        setFileState(FileState.map((data)=>{
                          if(d.id===data.id){
                            data.select=checked;
                          }return data;
                        }));
                      }} type="checkbox" checked={d.select} />
                      </td>
                    <td className="file_name-u">
                    
                    <FontAwesomeIcon className="pdf-file fas fa-file-pdf" icon="faFilePdf"/> {d.Item_Name}</td>
                    <td className="details-u">{d.Uploaded_On}</td>
                    <td className="delete-u">
                    <FontAwesomeIcon className="fas fa-times-circle" icon="faTimesCircle" 
                      onClick={() => setmodalIsOpen(true)} />
                  </td>
                  </tr>
                  ) )}
                </tbody>
              </table>
              </div>
              </div>

          <footer className="base-footer">
          <Pagination/>

            <p>Copyright © 2020 
            <a href="https://www.argali.in/">
              Argali Knowledge Services Pvt. Ltd., New Delhi, India</a></p>
          </footer>
          </div>

    </Fragment>

          )
          }

export default MyUploads;