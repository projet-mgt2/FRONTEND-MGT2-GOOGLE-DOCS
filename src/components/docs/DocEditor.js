import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
import { useEffect } from 'react';
import apiDocs from '../../api/documents/document';

export default function DocEditor() {
  useEffect(() => {
    const data = "Document";
    apiDocs.createDocument(data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <div className='container-fluid'>
        <DocumentEditorContainerComponent id="container" height={'100vh'} enableToolbar={true} title='Hello World' ></DocumentEditorContainerComponent>
    </div>
  );
}
