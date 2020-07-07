import React from 'react'
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom'
// import React, { Component } from 'react'
// import Row from '../row/index';
// import { StarshipDetails, StarshipList } from '../sw-components';


const StarshipPage = ({ history }) => {
  return (
    <StarshipList
      onItemSelected={(itemId) => history.push(itemId)} />
  )
}

export default withRouter(StarshipPage);
// export default class StarshipsPage extends Component {

//   state = {
//     selectedItem: null
//   }

//   onItemSelected = (selectedItem) => {
//     this.setState({ selectedItem });
//   }

//   render() {
//     const { selectedItem } = this.state;
    
//     return (
//       <Row
//         left={<StarshipList onItemSelected={this.onItemSelected} />}
//         right={<StarshipDetails itemId={selectedItem} />}
//       />
//     )
//   };
// };