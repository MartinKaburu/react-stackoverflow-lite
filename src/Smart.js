import React, { Component } from 'react';

// I dont usually do this but I was aiming for a MVP
const head = new Headers({
  'Authorization': 'Client-ID 7f87767a52287b85e15c8aef9ada32edfe9609d904f183bdbb93e76127889a14'
})

class Smart extends Component{
    constructor(props) {
        super(props);
        this.state = {
          image: '',
          alt: ''
        };
    }

    componentDidMount = () => {
        this.fetchData()
    }


    fetchData = () =>{
        fetch('https://api.unsplash.com/photos/random',{
          headers: head,
        })
        .then((response) => {
          if (response.status !== 200){
            alert("Rate limit has been exceeded, chill for a few mins.\nYou can read more about this here.\nhttps://unsplash.com/documentation#rate-limiting");
            const json = {
              urls: {
                regular: './404.jpg'
              },
              description: "You can read more about this problem here. https://unsplash.com/documentation#rate-limiting"
            }
            return json
          }
           return response.json()
        })
        .then((json) => {
          this.setState({image:json.urls.regular});
          this.setState({alt:json.description || 'nice image.'})
          });
         }
    myReloader = () => {
      this.fetchData()
    }

    home = () => {
      this.props.history.push('/');
    }

  render() {
    const { alt, image } = this.state
      return (
        <div>
          <div>
            <p>This is a very smart component click the image to see another one, or click <strong onClick={this.home} style={{ color: "red" }}>here</strong> to go back </p>
          </div>
          <div>
            <img src={image} alt={alt} onClick={this.myReloader}/>
            <p> { alt } </p>
          </div>
        </div>
    );
  }
}


export default Smart;
