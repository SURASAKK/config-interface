import React, { Component } from "react"
import { Input, Menu, Segment } from "semantic-ui-react"

export default class MenuV extends Component {
  public state = { activeItem: "home" }

  public handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  public render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>
          <Menu.Item name="Home" active={activeItem === "home"} onClick={this.handleItemClick} />
          <Menu.Item
            name="messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
        </Segment>
      </div>
    )
  }
}
