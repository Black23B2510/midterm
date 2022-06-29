import React, { Component } from 'react';
import axios from 'axios';
import './crud.css';

class Crud extends Component {
    constructor(props){
        super(props);
        this.state = {
          news:[],
          id:'',
          advertisement:[],
          title:'',
          content:'',
          image:'',
          times:'',
          comment:'',
          cateiD:''
        }
      }
      
    componentDidMount(){
        axios.get("https://628ae9bf667aea3a3e240e01.mockapi.io/news").then(res=>{
            this.setState({news:res.data})
        }) 
    }
    onChange = (event) =>{
        this.setState({
          [event.target.name]:event.target.value
        })
    }
    onChangeImage = (event) =>{
        this.setState({
          [event.target.name]: "img/"+event.target.files[0].name,
        });
        console.log(event.target.files[0].name);
    }
    getIdNew = (id) =>{
        for(var i=0; i<this.state.news.length;i++){
          if(this.state.news[i].id === id) {
            return i
          }
        }
        return -1;
    }
    onDelete = (id) =>{
        let notify = "Do you want to delete the news"+" "+id;
        if(window.confirm(notify)==true){
          axios({
            method:'DELETE',
            url :`https://628ae9bf667aea3a3e240e01.mockapi.io/news/${id}`,
            data: null
          }).then(res=>{
            if (res.status ===  200) {
              var index = this.getIdNew(id);
              if (index!==-1){
                var news = this.state.news;
                news.splice(index,1);
              }
                this.setState({
                  news :news
                });
            }
          })
        }
        else{
          alert("You don't want to delete it!")
        }
    }
    showEditNews = (id) => {
        var ne = this.getNews(id);
        this.setState({
            id:ne.id,
            title: ne.title,
            content: ne.content,
            image: ne.image,
            times: ne.times,
            cateiD: ne.cateiD
        });
        document.getElementById('editNews').style.display = 'block';
        document.getElementById('addNews').style.display = 'none';
        alert(id);
    }
    onSaveEdit = (event) =>{
        event.preventDefault();
        if (this.state.id !==''){
            if(this.state.title !== '' && this.state.times!=='' && this.state.image!=='' && this.state.content!=='' && this.state.cateID!==''){
              axios({
                method:'PUT',
                url :`https://628ae9bf667aea3a3e240e01.mockapi.io/news/${this.state.id}`,
                data: {
                  title:this.state.title,
                  content: this.state.content,
                  image: this.state.image,
                  times:this.state.times,
                  comment:this.state.comment,
                  cateiD:this.state.cateID
                }
              }).then(res => {
                window.location.reload();
                alert("Successfully");
              })
            }else{
              alert("Empty something");
            }
          }
          this.setState({
            id:" ",
            title:" ",
            content:" ",
            image:" ",
            times:" ",
            comment:" ",
            cateID:" "
      
          })
    }
    onSaveNews = (event) =>{
      event.preventDefault();
      if (this.state.id ==''){
        if(this.state.title !== '' && this.state.content!=='' && this.state.image!==''){
          axios({
            method:'POST',
            url :`https://628ae9bf667aea3a3e240e01.mockapi.io/news`,
            data: {
              title: this.state.title,
              content: this.state.content,
              image : this.state.image,
              times: this.state.times,
              comment: this.state.comment,
              cateiD: this.state.cateiD
            }
          }).then(res => {
            window.location.reload();
            alert("Successfully");
          })
        }else{
          alert("Empty something");
        }
      }
      else{
        alert("can not do")
      }
      this.setState({
        id:'',
        title :'',
        content:'',
        image:'',
        times:'',
        comment:'',
        cateiD:''
  
      })
    }
    getNews = (id) => {
      for(var i=0; i<this.state.news.length; i++) {
        if (this.state.news[i].id === id) {
          return this.state.news[i];
        }
      }
      return null;
    }
    render() {
        return (
          <div className='main'>
            <div id="editNews" style={{ display: "none" }}>
              <div><h2>EDIT NEWS</h2></div>
              <form onSubmit={this.onSaveEdit}>
                    <div className='input'>
                      <label>Title</label>
                      <input value={this.state.title} name="title"  onChange={this.onChange} type="text"></input>
                    </div>
                    <div className='input'>
                      <label>Content</label>
                      <textarea value={this.state.content} name="content" onChange={this.onChange} type="text"></textarea>
                    </div>
                    <div className='input'>
                      <label>Image</label>
                      <input name="image" onChange={this.onChangeImage} type="file"></input>
                    </div>
                    <div className='input'>
                      <label>Time</label>
                      <input value={this.state.times} name="times" onChange={this.onChange} type="date"></input>
                    </div>
                    <div className='input'>
                      <label>Category ID</label>
                      <input value={this.state.cateiD}  name="cateiD" onChange={this.onChange} type="text"></input>
                    </div>  
                    <div className='input'>
                        <img src={"./"+this.state.image} alt=""/>
                        <button className='button1' type='submit' >SAVE</button>
                    </div>                
                   
                </form>
            </div>
            <div id="addNews">
              <div><h2>ADD NEWS</h2></div>
              <form onSubmit={this.onSaveNews}>
                    <div className='input'>
                      <label>Title</label>
                      <input name="title"  onChange={this.onChange} type="text"></input>
                    </div>
                    <div className='input'>
                      <label>Content</label>
                      <textarea name="content" onChange={this.onChange} type="text"></textarea>
                    </div>
                    <div className='input'>
                      <label>Image</label>
                      <input name="image" onChange={this.onChangeImage} type="file"></input>
                    </div>
                    <div className='input'>
                      <label>Time</label>
                      <input name="times" onChange={this.onChange} type="date"></input>
                    </div>
                    <div className='input'>
                      <label>Category ID</label>
                      {/* <input name="cateiD" onChange={this.onChange} type="text"></input> */}
                      <select onChange={this.onChange} name="cateiD" id="cateiD" value="">
                        <option selected hidden>Moi chon</option>
                        <option value={"1"}>Thế giới</option>
                        <option value={"2"}>Quân đội-quốc phòng</option>
                        <option value={"3"}>Giải trí</option>
                        <option value={"4"}>Thể thao</option>
                      </select>
                    </div>  
                    <div className='input'>
                      <img className='img' src={"./"+this.state.image} alt=""/>
                      <button className='button1' type='submit' >ADD NEWS</button> 
                    </div>              
                </form>
            </div>
            <div>
                <div>
                    <table>
                      <thead>
                      <tr>
                            <th>STT</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Image</th>
                            <th>Time</th>
                            <th>Category ID</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.news.map((ne)=>(
                            <tr>
                                <td>{ne.id}</td>
                                <td>{ne.title}</td>
                                <td>{ne.content}</td>
                                <td><img  src={"./"+ne.image} alt=""/></td>
                                <td>{ne.times}</td>
                                <td>{ne.cateiD}</td>
                                <td><button onClick={() =>this.showEditNews(ne.id)} className='button2'>EDIT</button></td>
                                <td><button onClick={() =>this.onDelete(ne.id)} className='button2'>DELETE</button></td>
                            </tr>
                        )
                        )}
                      </tbody>
                    </table>
                </div>
            </div>
          </div>
        );
    }
}

export default Crud;