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
    <DocumentEditorContainerComponent id="container" height={'590px'} enableToolbar={true} ></DocumentEditorContainerComponent>
  );
}
