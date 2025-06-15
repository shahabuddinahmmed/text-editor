
import { useState } from 'react';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import './App.css';

function App() {
  const [blogContent, setBlogContent] = useState('');

  const blogContentHandler = (content) => {
    setBlogContent(content);
  }
  return (
    <div className="App">
      <p> My Other Contents </p>
      {blogContent}
      <SunEditor 
        autoFocus={true}
        placeholder='Enter Blog Descriptions'
        // setDefaultStyle="font-family: cursive; font-size: 14px;"
        onChange={blogContentHandler}
        setAllPlugins={true} 
      //   setOptions= {
      //     {
      //     buttonList:[
      //       [
      //         "undo",
      //         "redo",
      //         "save",
      //         "bold",
      //         "underline",
      //         "italic",
      //         "strike",
      //         "font",
      //         "subscript",
      //         "superscript",
      //         "list",
      //         "align",
      //         "image",
      //         "video",
      //         "audio",
      //         "fullScreen",
      //         "codeView",
      //         "preview",
      //         "table",
      //         "print",
      //         "paragraphStyle",
      //         "textStyle",
      //         "lineHeight",
      //         "imageGallery",
      //         "link",
      //         "horizontalRule",
      //         "indent",
      //         "outdent",
      //         "fontColor",
      //         "hiliteColor",
      //         "removeFormat",
      //         "fontSize",
      //       ]
      //     ]
      //   }
      // }
      setOptions={{
        height: 200,
        buttonList: buttonList.complex 
  }}
      />
    </div>
  );
}

export default App;
