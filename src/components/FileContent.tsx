import React from "react"
import { TextArea, Button } from "semantic-ui-react"
import MonacoEditor from "react-monaco-editor";
import styled from "styled-components"
import { Header, Icon, Segment } from "semantic-ui-react"

const LabelDiv = styled.div`
  margin-bottom: 5px;
`

const ContentDiv = styled.div`
  flex-grow: 1;
  margin-bottom: 10px;
  display: block;
  max-width: 100%;
  width: 100%;
`
type Props = {
    ProjectContent: string
    // tslint:disable-next-line:variable-name
    onChange: (string) => void
}
type State = {
    projectContent: string
}
export class FileContent extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            projectContent: props.projectContent,
        }
        this.handleContentChange = this.handleContentChange
    }
    public handleContentChange = (data) => {
        this.setState({ projectContent: data })
    }
    public componentWillReceiveProps(props: Props) {
        this.state = {
            projectContent: props.ProjectContent,
        }
    }
    public onSave = (e) => {
        this.props.onChange(this.state.projectContent)
    }
    public render() {
        const ButtonSave = () => (
            // <Button secondary onClick={this.onSave} floated="right">Save</Button>
            <Button floated="right" icon labelPosition="left" onClick={this.onSave}>
                <Icon name="save" />
                Save
            </Button>
        )
        const options = {
            minimap: { enabled: false },
            automaticLayout: true,
            rulers: [150]
        } as any;
        return (
            <div>
                <ContentDiv>
                    <Segment>
                        <Header as="h5">
                            <Icon name="edit" />
                            <Header.Content>Content</Header.Content>
                        </Header>
                        <MonacoEditor options={options} language="json" width="100%" height="80%" theme="vs-light" max-width="100%"
                            value={this.state.projectContent} onChange={this.handleContentChange} />
                    </Segment>
                </ContentDiv>
                <div>
                    <ButtonSave />
                </div>
            </div>
        )
    }
}