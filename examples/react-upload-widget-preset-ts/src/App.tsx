import { useState } from 'react';

import UploadWidget from './components/UploadWidget';

import './App.css';

export default function App() {
  const [url, updateUrl] = useState();
  const [error, updateError] = useState();

  /**
   * handleOnUpload
   */

  function handleOnUpload(error: any, result: any, widget: any) {
    if ( error ) {
      updateError(error);
      widget.close({
        quiet: true
      });
      return;
    }
    updateUrl(result?.info?.secure_url);
  }

  return (
    <main className="main">
      <div className="container">
        <h1 className="title">
          React &amp; Cloudinary Upload Widget
        </h1>
      </div>

      <div className="container">
        <h2>Unsigned with Upload Preset</h2>
        <UploadWidget onUpload={handleOnUpload}>
          {({ open }) => {
            return (
              <button onClick={() => open()}>
                Upload an Image
              </button>
            )
          }}
        </UploadWidget>

        {error && <p>{ error }</p>}

        {url && (
          <>
            <p><img src={ url } alt="Uploaded resource" /></p>
            <p>{ url }</p>
          </>
        )}
      </div>

      <div className="container">
        <h2>Resources</h2>
        <p>
          <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/react-upload-widget-preset">See the code on github.com.</a>
        </p>
      </div>
    </main>
  );
}