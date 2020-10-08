import React, {Component} from 'react'
import ApiContext from '../ApiContext'

class AddNote extends Component{
    static contextType = ApiContext;

    constructor(props){
        super(props);
        this.state={
            noteName:{
                value: '',
                touched: false
            },
            content:{
                value:'',
                touched:false
            },
        }
    }

    updateNoteName(noteName){
        this.setState({
            noteName: {
                value:noteName, 
                touched:true
            }})
    }

    updateNoteContent(content){
        this.setState({
            content:{
                value:content,
                touched:true
            }
        })
    }


    render(){
        return(
            <div>
            <h2>Add A New Note</h2>

            <form>
                <div className="add-note-name">
                    <label 
                    htmlFor="note-name"
                    {this.state.noteName.touched && (<ValidateError message={nameError})}></label>
                    <input
                        type="text"
                        className="note-name"
                        onChange={e => this.updateNoteName(e.target.value)}/>
                </div>

                <div className="add-note-content">
                    <label></label>
                    <input/>
                </div>

                <select className="select-folder"></select>

                
            </form>

            
            </div>
        )
    }

}

export default AddNote