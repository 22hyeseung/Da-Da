import React, { Component } from 'react'
import {
  Button,
  Segment,
  Search,
  Label,
  Grid,
  Input,
  Modal,
  Image,
  Header,
} from 'semantic-ui-react'
import cameraIcon from '../../static/img/diary-camera-icon.svg'

class DiaryFoodSearchModal extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () =>
    this.setState({
      open: false,
    })

  // modal
  show = dimmer => () =>
    this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })
  render() {
    const { open, dimmer } = this.state
    return (
      <Grid.Column
        width={1}
        style={{
          paddingLeft: '0px',
          paddingRight: '21px',
        }}
      >
        <img
          src={cameraIcon}
          className="diary-camera-icon"
          onClick={this.show('blurring')}
        />
        <Modal
          dimmer={dimmer}
          open={open}
          onClose={this.close}
        >
          <Modal.Header>
            Select a Photo
          </Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size="medium"
              src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201709101434"
            />
            <Modal.Description>
              <Header>
                Default Profile Image
              </Header>
              <p>
                We've found the following gravatar
                image associated with your e-mail
                address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="black"
              onClick={this.close}
            >
              Nope
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yep, that's me"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    )
  }
}

export default DiaryFoodSearchModal
