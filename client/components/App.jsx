import React from 'react';
import Note from './Note';
import ContainerNoteEditor from './../containers/NoteEditor.jsx';
import ContainerNoteGrid from './../containers/NotesGrid.jsx';

import './App.scss';

class App extends React.Component {

    render (){
            
            // <div className="app">
            //     <div className="app__sidebar">
            //         <img src="http://localhost:8080/client/imgs/try.png" alt="" className="app__flexible-image "/>
            //     </div>
            //     <div className="app__main">
            //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas mollitia eveniet beatae maiores numquam consequuntur quae fuga ratione non, quasi aliquid ipsum delectus! Ipsa dicta sint dolorum nesciunt necessitatibus qui!
            //     </div>
            // </div>

            // <div className="wrapper">
            //     <div className="header">
            //         <div className="inner-header">
            //             Шапка
            //         </div>
            //     </div>
            //     <div className="container clearfix">
            //         <div className="sidebar-1">
            //             <div className="inner-sidebar1">
            //                 Сайтбар 1
            //             </div>
            //         </div>
            //         <div className="content">
            //             <div className="inner-content">
            //                 Контент
            //             </div>
            //         </div>
            //         <div className="sidebar-2">
            //             <div className="inner-sidebar">
            //                 Сайтбар 2
            //             </div>
            //         </div>
            //     </div>
            //     <div className="footer">
            //         <div className="inner-footer">
            //             Футер
            //         </div>
            //     </div>
            // </div>
        return (
            <div className="app">
                <h2 className="app__header">NotesApp</h2>
                <ContainerNoteEditor />
                <ContainerNoteGrid />
            </div>
        )
    }
}

export default App;