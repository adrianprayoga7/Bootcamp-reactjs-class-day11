import React from "react";
import ReactDOM from "react-dom/client";
// import { Comment } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';
import 'semantic-ui-css/semantic.min.css';


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);


// membuat setiap atribut menggunakan faker
const data = [
  {
  avatar : faker.image.avatar(),
  name : faker.name.fullName(),
  time : faker.date.past().toDateString(),
  // count : faker.datatype.number({min:0, max:100}),
  comment : faker.lorem.lines()
},
{
  avatar : faker.image.avatar(),
  name : faker.name.fullName(),
  time : faker.date.past().toDateString(),
  // count : faker.datatype.number({min:0, max:100}),
  comment : faker.lorem.lines()
}
];

//kerangka yang akan ditampilkan ke layar menggunakan html
class CommentContainer extends React.Component {
  constructor(props) {
        // agar data yang dirikim dapat diterima
        super(props);
        this.state = {
          count: 0,
        };
      }
  render() {
    return (
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
              <img alt="avatar" src={this.props.avatar}></img>
          </a>
          <div className="content">
              <a href="/" className="author">
                {this.props.name}
              </a>
              <div className="metadata">
                  <span className="date">
                      {this.props.day} at {this.props.time} | Liked: {this.state.count}
                  </span>
              </div>
              
              <div className="text">{this.props.comment}</div>
          </div>
          <br></br>
          <button onClick={()=> this.setState({ count: this.state.count + 1})}>Like!</button>
        </div>
        <br></br>
      </div>
    );
  }
}

//menginisialisasi data array menggunakan map
class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return this.props.data.map((dataComment, index) => (
      <div className="commentContainer" key={index}>
        {/* pemanggilan atribut */}
        <CommentContainer
          avatar={dataComment.avatar}
          name={dataComment.name}
          // liked={dataComment.liked}
          time={dataComment.time}
          comment={dataComment.comment}
        />
      </div>
    ))
  }
}

// class Counting extends React.Component {
//   constructor(props) {
//     // agar data yang dirikim dapat diterima
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     return (
//     <div>
//         <h1>you clicked {this.state.count} times</h1>
//         <button onClick={()=> this.setState({ count: this.state.count + 1})}>Click on me!</button>
//     </div>
//     );
//   }
// }


// memanggil fungsi co  mment dan data
const App = () => {
  return <div>{<Comments data = {data} />}</div>
}





//merender fungsi App dan menampilkan ke layar
root.render(<App />);

 
