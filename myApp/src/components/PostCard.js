import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Link } from "react-router-dom";

const PostCard = (props) => {
  //console.log(props)
  let link = props.post.video.replace(/[\s\S]*(embed\/)/g, '')
  return (
    <div className="cardBorder">
      <Card>
        <Link to={{
          pathname: `/${props.url}/${props.post.id}`,
          sect: `${props.sect}`
        }}>
          <div className="crop">
            <CardImg top src={`https://img.youtube.com/vi/${link}/0.jpg`} alt={props.post.title} />
          </div>
          <CardBody>
            <CardTitle>{props.post.title}</CardTitle>
            <span className="cardLink btn btn-secondary">Рецепт</span>
          </CardBody>
        </Link>
        <div className="card-footer">
          <span className="fa fa-clock-o" aria-hidden="true">&nbsp;45 min</span>
          <span className="fa fa-eye" aria-hidden="true">&nbsp;99</span>
          <Link className="fa fa-comment-o" aria-hidden="true" to="#">&nbsp;12</Link>
          <span className="fa fa-thumbs-o-up" aria-hidden="true">&nbsp;11</span>
        </div>
      </Card>
    </div>
  );
};

export default PostCard;

// export default class PostCard extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(event) {
//    // console.log(this.props)
//     //  <ProductCard {this.props} />
//     return (<ProductCard card={this.props} />);
//   }
//   render() {
//     let link = this.props.post.video.replace(/[\s\S]*(embed\/)/g, '')
//     // let srcLink=`<style>html, body, a, img {display: block; width: 100%; height: 100%; margin: 0; padding: 0;} a:before, a:after {position: absolute; content: ''; left: 50%; top: 50%;} a:before {margin: -4.9% 0 0 -7%; background: rgba(31,31,30,.8); padding-top: 9.8%; width: 14%; border-radius: 16% / 27%;} a:after {margin: -1.9vw 0 0 -1.9vw; border: 2vw solid transparent; border-left: 3.8vw solid #fff;} a:hover:before {background: #c0171c;}</style><a href=${props.post.video}><img src='//img.youtube.com/vi/${link}/0.jpg'srcset='//img.youtube.com/vi/${link}/0.jpg 320w, //img.youtube.com/vi/${link}/0.jpg 480w, //img.youtube.com/vi/${link}/0.jpg 1307w'></a>`

//     return (
//       <div className="cardBorder">
//         <Card>
//           <div className="crop">
//             <CardImg top src={`https://img.youtube.com/vi/${link}/0.jpg`} alt={this.props.post.title} />
//           </div>
//           {/* <div className="embed-responsive embed-responsive-16by9">
//         <iframe className="embed-responsive-item" title={props.post.title} srcDoc={srcLink} allowFullScreen></iframe>
//         </div> */}
//           <CardBody>
//             <CardTitle>{this.props.post.title}</CardTitle>
//             {/* <CardSubtitle>Ингредиенты</CardSubtitle>
//         <CardText>{props.post.body}</CardText> */}
//             <Link to={`/productcard/${this.props.post.id}`} onClick={this.handleClick}>Рецепт</Link>
//           </CardBody>
//         </Card>

//       </div>
//     );
//   }
// };