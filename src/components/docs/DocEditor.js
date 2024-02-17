'use client'
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);

export default function DocEditor() {
  return (
    <>
      <DocumentEditorContainerComponent id="container" height={'590px'}>
      </DocumentEditorContainerComponent>
    </>
  )
}
