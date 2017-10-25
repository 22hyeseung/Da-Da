import React, { Component } from 'react'
import {
  Grid,
  Image,
  Icon,
  Card,
} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as Style from './StyledResult'
import ComponentLoader from '../../../components/Loader/ComponentLoader'
import { connect } from 'react-redux'
import rootApi from '../../../config'

class ResultBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResult: [],
      isEmpty: true,
      loading: true,
    }
  }

  componentWillMount() {
    this.getRecipeList(this.props.search)
  }

  getRecipeList(search) {
    fetch(
      `${rootApi}/recipe/search?name=${search}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.props.token}`,
        },
      },
    )
      .then(res => res.json())
      .then(result => {
        this.setState({
          searchResult: result,
          isEmpty: false,
        })

        setTimeout(() => {
          this.setState({
            loading: false,
          })
        }, 1500)
      })
  }

  render() {
    if (this.state.loading) {
      return <ComponentLoader />
    }

    return (
      <Grid style={Style.wrapper}>
        <Grid.Row style={Style.messagewrap}>
          <span style={Style.message}>
            ‘{this.props.search}’ 검색 결과 {this.state.searchResult.length}건
          </span>
          <div
            style={{
              marginLeft: '83.5%',
            }}
          >
            <Icon
              style={Style.icon}
              name="grid layout"
            />
            <Icon
              style={Style.icon}
              name="list layout"
            />
          </div>
        </Grid.Row>
        <Grid.Row
          columns={4}
          style={Style.ImageWrap}
        >
        {
          this.state.searchResult == 0 ? (
            <div style={Style.noSearchContainer}>
              <p style={Style.noSearchText}>
                이런..찾으시는 레시피가 없나요? 다른 음식은 어떠세요?
              </p>
              <img
                style={Style.noSearchImage}
                src={Style.noSearchSvgSrc}
                alt="No Search..."
                aria-hidden="true"
              />
            </div>
          ) : (
            this.state.searchResult.map((result, i) => {
              console.log(result, '<< [ result ]');
              return (
                <Grid.Column style={{ padding: '0' }}>
                  <div style={{ width: '279px' }}>
                    <Link to={"/recipe/" + result.recipe_id}>
                      <Card>
                        <Image
                          as="a"
                          style={{
                            ...Style.ResultImage,
                            backgroundImage: `url(//s3.ap-northeast-2.amazonaws.com/dada-s3-file/recipe/thumb/${result.recipe_id}.jpg)`,
                          }}
                          src="/"
                          target="_blank"
                        />
                        <Card.Content
                          style={Style.CardLabel}
                        >
                          <Card.Header
                            style={Style.CardLabelHeader}
                          >
                            {result.recipe_name_ko}
                          </Card.Header>
                          <Card.Meta
                            style={Style.CardLabelLeftText}
                          >
                            <Icon name="clock" />
                            소요시간: {result.recipe_time}
                          </Card.Meta>
                          <Card.Description
                            style={Style.CardLabelRightText}
                          >
                            <span style={Style.dataText}>
                              {result.recipe_kcal}
                            </span>{' '}
                            kcal
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </Link>
                  </div>
                </Grid.Column>
              )
            })
          )

        }
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, null)(
  ResultBox,
)
