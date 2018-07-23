import React, { CSSProperties } from "react"
import { Dropdown } from "semantic-ui-react"
import styled from "styled-components"
import { Header, Icon, Divider } from "semantic-ui-react"

const LabelDiv = styled.div`
  margin-bottom: 5px;
`
type Props = {
    projectName: string
    dropdownOption: any[]
    // tslint:disable-next-line:variable-name
    onChange: (string) => void
}
export class ProjectList extends React.Component<Props> {
    constructor(props) {
        super(props)
    }
    public setValue(e, data) {
        this.props.onChange(data.value)
    }
    public render() {
        const DropdownProjectName = ({ }) => (
            <Dropdown placeholder={this.props.projectName} fluid selection options={this.props.dropdownOption}
                onChange={this.setValue.bind(this)} value={this.props.projectName} />
        )
        return (
            <div>
                <Header as="h5">
                    <Icon name="archive" />
                    <Header.Content>Select Project</Header.Content>
                </Header>
                <DropdownProjectName />
                <Divider />
            </div>
        )
    }
}