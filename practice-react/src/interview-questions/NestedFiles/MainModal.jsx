import { useState } from 'react';
import List from './components/List.jsx';
import explorer  from './data/folderData.js';
export default function MainModel(){
    if(explorer){
        return (
            <>
                <List data={explorer}/>
            </>
        )

    }
}