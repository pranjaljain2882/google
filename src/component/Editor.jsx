import { useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import  { Box } from '@mui/material'; 
import styled from '@emotion/styled';
import { blue } from '@mui/material/colors';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";

// background color
const Component = styled.div`
    background: #F5F5F5;
`


// toolbar
const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];

const Editor = () => {

    useEffect(() =>{
        const quillserver = new Quill('#container',{theme: 'snow',modules:{toolbar: toolbarOptions}})
    },[])
    return (
        // Text Editor
        <Component>
            <Box className='container' id='container'> </Box>
        </Component>
    )
}
export default Editor;